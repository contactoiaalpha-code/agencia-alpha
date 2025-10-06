"use client";

import React from "react";
import Image from "next/image";

export const ChatButton: React.FC = () => {
  const handleChatClick = () => {
    // Aquí irá la URL de tu webhook de n8n
    // Por ahora abre en nueva ventana, puedes cambiar esto por un modal/iframe
    const n8nChatUrl =
      process.env.NEXT_PUBLIC_N8N_CHAT_URL || "https://tu-n8n-webhook-url.com";
    window.open(n8nChatUrl, "_blank", "width=400,height=600");
  };

  return (
    <button
      onClick={handleChatClick}
      className="fixed bottom-24 right-6 z-50 hover:scale-110 transition-all duration-300 group"
      aria-label="Chatear con agente IA"
    >
      {/* Icono SVG de Alpha (letra griega) con fondo naranja */}
      <div className="relative w-14 h-14 rounded-full shadow-2xl hover:shadow-primary/50 transition-shadow duration-300">
        <Image
          src="/icono-chat.svg"
          alt="Chat IA Alpha"
          width={56}
          height={56}
          className="w-full h-full rounded-full"
          priority
        />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Chatea con un agente IA!
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-l-gray-800"></div>
      </div>

      {/* Badge de notificación animado */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
    </button>
  );
};
