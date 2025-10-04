import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar datos requeridos
    const { nombre, email, area, mensaje } = body;

    if (!nombre || !email || !area || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Aquí enviarías los datos a tu webhook de n8n
    // Por seguridad, no incluyo la URL del webhook en el código
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre,
            email,
            area,
            mensaje,
            fecha: new Date().toISOString(),
            fuente: "sitio-web",
          }),
        });

        if (!response.ok) {
          console.error("Error al enviar a webhook:", response.statusText);
          // Continuar incluso si falla el webhook
        }
      } catch (webhookError) {
        console.error("Error de conexión con webhook:", webhookError);
        // Continuar incluso si falla el webhook
      }
    }

    // También podrías guardar en una base de datos aquí
    // Por ejemplo, usando Supabase, MongoDB, etc.

    return NextResponse.json(
      { message: "Mensaje enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API de contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
