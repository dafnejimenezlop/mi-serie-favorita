/**
 * Controlador compartido de las pestañas del sitio.
 *
 * Resumen, Aclaraciones y Galería repetían el mismo `movePillTo` /
 * `activateTab` / `repositionPill` / `document.fonts.ready` —unas 60 líneas
 * cada uno— cambiando solo el sufijo de las clases. Cualquier arreglo había
 * que hacerlo tres veces, y era justo lo que estaba pasando con la
 * accesibilidad: los tres declaraban `role="tablist"` y `aria-controls` pero
 * ninguno marcaba los paneles como `tabpanel` ni permitía moverse con las
 * flechas, que es la mitad del patrón ARIA de pestañas.
 *
 * Aquí está una sola vez, con el patrón completo: píldora deslizante,
 * `aria-selected`, tabindex móvil (solo la pestaña activa entra en el orden
 * de tabulación) y navegación con flechas / Inicio / Fin.
 */

/**
 * @param {object} opciones
 * @param {string} opciones.boton       Selector de los botones de pestaña.
 * @param {string} opciones.panel       Selector de los paneles de contenido.
 * @param {string} opciones.pastilla    Id del indicador deslizante.
 * @param {string} opciones.inicial     `data-target` de la pestaña por defecto.
 * @param {(id: string) => void} [opciones.alCambiar] Efecto extra al activar.
 * @returns {() => void} Función de reset, para el router de `index.astro`.
 */
export function initTabs({ boton, panel, pastilla, inicial, alCambiar }) {
  const botones = Array.from(document.querySelectorAll(boton));
  const paneles = Array.from(document.querySelectorAll(panel));
  const indicador = pastilla ? document.getElementById(pastilla) : null;

  if (!botones.length) return () => {};

  const ACTIVO = ['active', 'text-black'];
  const INACTIVO = ['text-stone-600', 'dark:text-stone-400'];

  function moverPastilla(botonEl) {
    if (!indicador || !botonEl) return;
    // Lectura y escritura separadas: primero se mide, después se pinta.
    const izquierda = botonEl.offsetLeft;
    const ancho = botonEl.offsetWidth;
    indicador.style.left = `${izquierda}px`;
    indicador.style.width = `${ancho}px`;
    indicador.style.opacity = '1';
  }

  function activar(idPanel, { mover = true } = {}) {
    const panelDestino = document.getElementById(idPanel);
    const botonDestino = botones.find((b) => b.dataset.target === idPanel);
    if (!panelDestino || !botonDestino) return;

    paneles.forEach((p) => {
      const esActivo = p === panelDestino;
      p.classList.toggle('hidden', !esActivo);
      p.classList.toggle('block', esActivo);
    });

    botones.forEach((b) => {
      const esActivo = b === botonDestino;
      b.classList.toggle('active', esActivo);
      b.classList.toggle('text-black', esActivo);
      INACTIVO.forEach((c) => b.classList.toggle(c, !esActivo));
      b.setAttribute('aria-selected', esActivo ? 'true' : 'false');
      // Tabindex móvil: dentro de un tablist, Tab entra y sale del grupo y
      // son las flechas las que recorren las pestañas.
      b.tabIndex = esActivo ? 0 : -1;
    });

    if (mover) moverPastilla(botonDestino);
    if (typeof alCambiar === 'function') alCambiar(idPanel);
    if (typeof AOS !== 'undefined') window.setTimeout(() => AOS.refresh(), 60);
  }

  function reposicionar() {
    moverPastilla(botones.find((b) => b.classList.contains('active')) || botones[0]);
  }

  botones.forEach((b, i) => {
    b.addEventListener('click', () => activar(b.dataset.target));
    b.addEventListener('keydown', (evento) => {
      const salto = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 1, ArrowUp: -1 }[
        evento.key
      ];
      let destino = null;
      if (salto) destino = botones[(i + salto + botones.length) % botones.length];
      else if (evento.key === 'Home') destino = botones[0];
      else if (evento.key === 'End') destino = botones[botones.length - 1];
      if (!destino) return;
      evento.preventDefault();
      activar(destino.dataset.target);
      destino.focus();
    });
  });

  window.addEventListener('resize', reposicionar);
  // La píldora se dimensiona midiendo el ancho del texto: medirla con la
  // fuente de reserva la deja desalineada hasta el primer resize.
  if (document.fonts?.ready) document.fonts.ready.then(reposicionar);

  // Estado inicial, sin efectos secundarios de cambio de pestaña.
  const activaInicial =
    botones.find((b) => b.classList.contains('active')) || botones[0];
  botones.forEach((b) => {
    b.tabIndex = b === activaInicial ? 0 : -1;
  });
  reposicionar();

  return () => activar(inicial);
}

/**
 * Sustituye una carátula estática por el iframe real de YouTube al pulsarla.
 *
 * Los tres vídeos de temporada vivían como iframes desde la carga inicial,
 * dentro de pestañas ocultas: tres reproductores completos —del orden de 1 MB
 * de JS cada uno— por si acaso alguien llegaba a abrirlos. La carátula pesa
 * una imagen.
 */
export function initVideoFacades(selector = '[data-video-facade]') {
  document.querySelectorAll(selector).forEach((marco) => {
    const disparador = marco.querySelector('[data-video-play]');
    if (!disparador) return;

    disparador.addEventListener('click', () => {
      const id = marco.dataset.videoId;
      const titulo = marco.dataset.videoTitle || 'Vídeo de YouTube';
      if (!id) return;

      const iframe = document.createElement('iframe');
      iframe.className = 'absolute inset-0 w-full h-full';
      iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&controls=1`;
      iframe.title = titulo;
      iframe.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';

      disparador.remove();
      marco.appendChild(iframe);
    });
  });
}
