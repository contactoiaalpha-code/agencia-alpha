"use client";

import React, { useState, useEffect } from "react";
import { NeuralBackground } from "@/components/ui/NeuralBackground";

export const HeroSection: React.FC = () => {
  const [typingText, setTypingText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "tu restaurante",
    "tu consultorio",
    "tu boutique",
    "tu emprendimiento",
    "tu oficina",
    "tu comercializadora",
    "tu despacho jurídico",
    "tu escuela",
    "tu centro de atención a clientes",
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const typeText = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting && typingText.length < currentWord.length) {
        // Escribiendo
        setTypingText(currentWord.slice(0, typingText.length + 1));
        timeout = setTimeout(typeText, 100);
      } else if (!isDeleting && typingText.length === currentWord.length) {
        // Pausa antes de borrar
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typingText.length > 0) {
        // Borrando
        setTypingText(typingText.slice(0, -1));
        timeout = setTimeout(typeText, 50);
      } else if (isDeleting && typingText.length === 0) {
        // Cambiar a siguiente palabra
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        timeout = setTimeout(typeText, 100);
      }
    };

    timeout = setTimeout(typeText, 100);

    return () => clearTimeout(timeout);
  }, [currentWordIndex, words, typingText, isDeleting]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Neural Network Background */}
      <NeuralBackground />

      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24 lg:pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            <span className="text-white block mb-2">
              En Agencia Alpha creemos que la{" "}
              <span className="text-primary">IA</span> no es solo para grandes
              corporativos.
            </span>
            <span className="text-white block mb-2">
              Es para:{" "}
              <span className="text-primary inline-block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                {typingText}
                <span className="animate-pulse text-white font-bold">|</span>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto px-4 mb-8 sm:mb-12">
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-6 leading-relaxed font-light"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Creamos automatizaciones inteligentes que trabajan como tu
              recepcionista, tu asistente de ventas o tu entrevistador de
              personal, 24/7, sin cansarse y sin que tengas que pagar nóminas
              extra.
            </p>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed font-light"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Nuestra misión no es venderte tecnología.
              <br />
              <span className="text-primary font-semibold">
                👉 Es ayudarte a crecer, simplificar tu vida y que tu negocio
                tenga siempre alguien atendiendo a tus clientes.
              </span>
            </p>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-gray-400">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-gray-400">Soporte Técnico</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">99%</div>
              <div className="text-sm text-gray-400">Satisfacción Cliente</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
