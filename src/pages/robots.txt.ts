import type { APIRoute } from 'astro';

// El sitio no tenía `robots.txt` ni sitemap, y tampoco `site` configurado en
// `astro.config.mjs`. En vez de fijar un dominio a mano —que se quedaría
// obsoleto en cuanto cambie— se resuelve en tiempo de petición a partir del
// origen real, que en Vercel es siempre el correcto.
export const GET: APIRoute = ({ site, url }) => {
  const origen = site ?? new URL(url.origin);

  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', origen).href}
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
