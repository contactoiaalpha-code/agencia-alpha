"use client";

import React from "react";
import { FiMessageCircle } from "react-icons/fi";
import { companyInfo } from "@/data/content";

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group"
    >
      <FiMessageCircle className="w-6 h-6" />

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Escríbenos por WhatsApp!
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-r-0 border-t-4 border-b-0 border-l-gray-800"></div>
      </div>
    </a>
  );
};
