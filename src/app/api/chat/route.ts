import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK || "";

    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Webhook no configurado" },
        { status: 500 }
      );
    }

    // Formatear datos para n8n AI Agent
    const payload = {
      data: {
        message: body.message,
        conversation: body.sessionId, // sessionId como conversation
      },
    };

    console.log("📤 Enviando a n8n:", payload);

    // Enviar a n8n
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    // Responder con CORS habilitado
    return NextResponse.json(data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error en proxy:", error);
    return NextResponse.json(
      { error: "Error al procesar mensaje" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
