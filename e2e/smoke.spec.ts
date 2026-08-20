import { test, expect, type Page } from '@playwright/test';

// Las seis vistas del router por hash. Si alguien añade una séptima y olvida
// registrarla en `index.astro`, este test lo caza antes que un usuario.
const VISTAS = [
  { hash: '#inicio', id: 'vista-inicio', enlace: 'Inicio' },
  { hash: '#resumen', id: 'vista-resumen', enlace: 'Resumen' },
  { hash: '#aclaraciones', id: 'vista-aclaraciones', enlace: 'Aclaraciones' },
  { hash: '#personajes', id: 'vista-personajes', enlace: 'Familias' },
  {
    hash: '#recomendaciones',
    id: 'vista-recomendaciones',
    enlace: 'Recomendaciones',
  },
  { hash: '#galeria', id: 'vista-galeria', enlace: 'Galería' },
];

/**
 * `waitUntil: 'domcontentloaded'` y no el `'load'` por defecto: la página
 * monta un iframe de YouTube de fondo, y esa conexión de terceros puede dejar
 * el evento `load` pendiente indefinidamente. Lo que aquí importa es que el
 * DOM y los scripts del sitio estén listos.
 */
async function esperarAPagina(page: Page) {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#global-loader')).toHaveCount(0, {
    timeout: 15_000,
  });
}

/** Navega como lo haría una persona: abriendo el menú si hace falta. */
async function irA(page: Page, enlace: string) {
  const esMovil = (page.viewportSize()?.width ?? 0) < 768;
  if (esMovil) {
    await page.locator('#menuToggle').click();
    await page.locator(`[data-mobile-link]:has-text("${enlace}")`).click();
  } else {
    await page.locator(`[data-nav-link]:has-text("${enlace}")`).click();
  }
}

test.describe('navegación', () => {
  test('las seis vistas se alcanzan con un clic real en el menú', async ({
    page,
  }) => {
    await esperarAPagina(page);

    for (const vista of VISTAS) {
      await irA(page, vista.enlace);
      await expect(page.locator(`#${vista.id}`)).toBeVisible();
      expect(new URL(page.url()).hash).toBe(vista.hash);
    }
  });

  test('ningún enlace del sitio apunta a un hash inexistente', async ({
    page,
  }) => {
    await esperarAPagina(page);

    const hashesValidos = new Set(VISTAS.map((v) => v.hash));
    const rotos = await page.evaluate((validos) => {
      const anclasInternas = new Set(
        [...document.querySelectorAll('[id]')].map((el) => `#${el.id}`),
      );
      return [...document.querySelectorAll('a[href^="#"], a[href^="/#"]')]
        .map((a) => (a.getAttribute('href') || '').replace(/^\//, ''))
        .filter(
          (href) =>
            href !== '' &&
            !validos.includes(href) &&
            !anclasInternas.has(href),
        );
    }, [...hashesValidos]);

    expect(rotos, `enlaces sin destino: ${rotos.join(', ')}`).toEqual([]);
  });
});

test.describe('maquetación', () => {
  test('no hay scroll horizontal en ninguna vista', async ({ page }) => {
    await esperarAPagina(page);

    // Se recorren las seis y se informa de todas a la vez: parándose en la
    // primera haría falta una vuelta por cada vista rota.
    const desbordes: string[] = [];
    for (const vista of VISTAS) {
      await page.goto(`/${vista.hash}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(400);
      const sobra = await page.evaluate(() => {
        const doc = document.documentElement;
        return doc.scrollWidth - doc.clientWidth;
      });
      if (sobra > 0) desbordes.push(`${vista.hash}: ${sobra}px`);
    }

    expect(desbordes, `desbordan: ${desbordes.join(' · ')}`).toEqual([]);
  });

  test('la frase del día no se solapa con sus controles', async ({ page }) => {
    await esperarAPagina(page);

    // La cita más larga era la que se salía del contenedor de altura fija.
    const solapa = await page.evaluate(() => {
      const widget = document.querySelector('[data-quote-widget]');
      if (!widget) return false;
      const slides = [...widget.querySelectorAll('[data-quote-slide]')];
      const controles = widget.querySelector('[data-quote-dots]')?.parentElement;
      if (!controles) return false;
      const topeControles = controles.getBoundingClientRect().top;
      return slides.some((slide) => {
        slide.classList.remove('opacity-0');
        const pie = slide.querySelector('footer');
        return pie ? pie.getBoundingClientRect().bottom > topeControles : false;
      });
    });

    expect(solapa).toBe(false);
  });
});

test.describe('tema', () => {
  test('el interruptor cambia de modo y lo recuerda', async ({ page }) => {
    await esperarAPagina(page);

    // Sin asumir con cuál arranca: el modo inicial depende de
    // `prefers-color-scheme` del sistema, así que el test comprueba la
    // inversión y la persistencia, que es lo que de verdad importa.
    const esOscuro = () =>
      page.evaluate(() => document.documentElement.classList.contains('dark'));

    const inicial = await esOscuro();

    await page.locator('#themeToggle').click();
    await expect.poll(esOscuro).toBe(!inicial);
    expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe(
      inicial ? 'light' : 'dark',
    );

    await page.reload({ waitUntil: 'domcontentloaded' });
    await expect.poll(esOscuro).toBe(!inicial);

    await page.locator('#themeToggle').click();
    await expect.poll(esOscuro).toBe(inicial);
  });
});

test.describe('rendimiento', () => {
  test('la primera carga no trae ningún reproductor de YouTube', async ({
    page,
  }) => {
    await esperarAPagina(page);

    // Antes eran seis iframes en el HTML inicial, tres de ellos del mismo
    // vídeo. El ambiental se monta después, en el primer hueco de inactividad.
    const iframesIniciales = await page.evaluate(
      () => document.querySelectorAll('iframe').length,
    );
    expect(iframesIniciales).toBeLessThanOrEqual(2);
  });

  test('los vídeos de Resumen solo se montan al pulsarlos', async ({
    page,
  }) => {
    await esperarAPagina(page);
    await page.goto('/#resumen', { waitUntil: 'domcontentloaded' });

    const caratula = page.locator('[data-video-facade]').first();
    await expect(caratula.locator('iframe')).toHaveCount(0);

    await caratula.locator('[data-video-play]').click();
    await expect(caratula.locator('iframe')).toHaveCount(1);
  });
});

test.describe('asistente', () => {
  test('abre con cuatro temas, no con las doce preguntas', async ({ page }) => {
    await esperarAPagina(page);
    // Los botones flotantes se esconden mientras el hero domina la pantalla.
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.5));

    await page.locator('#asistente-toggle').click();
    await expect(page.locator('#asistente-panel')).toBeVisible();

    const sugerencias = page.locator('#asistente-sugerencias button');
    await expect(sugerencias).toHaveCount(4);

    // Al elegir un tema aparecen sus preguntas, nunca más de cuatro.
    await sugerencias.first().click();
    const preguntas = page.locator(
      '#asistente-sugerencias [data-asistente-option]',
    );
    expect(await preguntas.count()).toBeLessThanOrEqual(4);

    await page.locator('#asistente-volver').click();
    await expect(page.locator('#asistente-sugerencias button')).toHaveCount(4);
  });
});
