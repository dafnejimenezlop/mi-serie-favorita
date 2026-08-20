import type { APIRoute } from 'astro';

// Un sitemap de una sola URL. Es la consecuencia directa de que las seis
// secciones vivan en el mismo documento tras `location.hash`: para un
// rastreador solo existe la raíz. Se deja preparado —y enlazado desde
// robots.txt— para que el día que las vistas pasen a rutas reales solo haya
// que añadirlas a esta lista.
const RUTAS = ['/'];

export const GET: APIRoute = ({ site, url }) => {
  const origen = site ?? new URL(url.origin);
  const hoy = new Date().toISOString().split('T')[0];

  const cuerpo = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${RUTAS.map(
  (ruta) => `  <url>
    <loc>${new URL(ruta, origen).href}</loc>
    <lastmod>${hoy}</lastmod>
    <changefreq>monthly</changefreq>
  </url>`,
).join('\n')}
</urlset>
`;

  return new Response(cuerpo, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
