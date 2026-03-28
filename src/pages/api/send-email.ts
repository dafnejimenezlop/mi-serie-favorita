import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  // Inicializamos Resend DENTRO del POST para asegurar que la key se lea bien
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  try {
    const data = await request.json();
    const { email, message } = data;

    if (!email || !message) {
      return new Response(JSON.stringify({ error: 'Faltan campos' }), {
        status: 400,
      });
    }

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev', // Usa este estrictamente para pruebas
      to: 'arocajimenez01@gmail.com',
      subject: '¡Nueva Recomendación!',
      html: `
        <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #e50914;">Nueva recomendación</h2>
          <p><strong>De:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        </div>
      `,
    });

    if (result.error) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Error en el servidor' }), {
      status: 500,
    });
  }
};
