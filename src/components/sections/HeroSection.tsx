"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { NeuralBackground } from "@/components/ui/NeuralBackground";
import { companyInfo, heroContent } from "@/data/content";

export const HeroSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  const scrollToServices = () => {
    const element = document.getElementById("servicios");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Neural Network Background */}
      <NeuralBackground />

      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-primary">
              {heroContent.title.split(" ").slice(0, 3).join(" ")}
            </span>
            <br />
            <span className="text-white">
              {heroContent.title.split(" ").slice(3).join(" ")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {heroContent.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href={whatsappUrl}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroContent.primaryCTA}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              onClick={scrollToServices}
            >
              {heroContent.secondaryCTA}
            </Button>
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
