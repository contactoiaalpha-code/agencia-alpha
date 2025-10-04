"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado las cookies
    const hasAccepted = localStorage.getItem("cookies-accepted");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookies-accepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-white">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio
              web. Al continuar navegando, aceptas nuestra{" "}
              <a
                href="/privacy"
                className="text-primary hover:underline"
                target="_blank"
              >
                Política de Privacidad
              </a>{" "}
              y{" "}
              <a
                href="/terms"
                className="text-primary hover:underline"
                target="_blank"
              >
                Términos de Uso
              </a>
              .
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button variant="outline" size="sm" onClick={rejectCookies}>
              Rechazar
            </Button>
            <Button variant="primary" size="sm" onClick={acceptCookies}>
              Aceptar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
