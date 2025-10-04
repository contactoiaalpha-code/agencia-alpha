"use client";

import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { caseStudies } from "@/data/content";

export const CaseStudiesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="casos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Historias de <span className="text-primary">Éxito</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mira cómo nuestros clientes han transformado sus negocios con la
            inteligencia artificial.
          </p>
        </AnimateOnScroll>

        {/* Carrusel principal */}
        <div className="relative mb-8">
          <AnimateOnScroll>
            <Card className="overflow-hidden">
              <div className="relative">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {caseStudies.map((study, index) => (
                    <div key={study.id} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8">
                        {/* Imagen */}
                        <div className="relative">
                          <img
                            src={study.image}
                            alt={`Caso de estudio - ${study.company}`}
                            className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                          <div className="absolute bottom-4 left-4 text-white">
                            <h4 className="text-lg font-semibold">
                              {study.company}
                            </h4>
                            <p className="text-sm opacity-90">
                              {study.industry}
                            </p>
                          </div>
                        </div>

                        {/* Contenido */}
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                              El Desafío
                            </h3>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold text-primary mb-3">
                              La Solución
                            </h3>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold text-green-600 mb-3">
                              Los Resultados
                            </h3>
                            <p className="text-gray-600">{study.results}</p>
                          </div>

                          <button className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                            <FiExternalLink className="w-4 h-4 mr-2" />
                            Ver Caso Completo
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controles de navegación */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300"
                >
                  <FiChevronLeft className="w-6 h-6 text-gray-900" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300"
                >
                  <FiChevronRight className="w-6 h-6 text-gray-900" />
                </button>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center space-x-2 mb-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-yellow-400"
                  : "bg-gray-300 hover:bg-yellow-400/50"
              }`}
            />
          ))}
        </div>

        {/* Estadísticas rápidas */}
        <AnimateOnScroll className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "150+", label: "Clientes Satisfechos" },
            { number: "300%", label: "Aumento en Eficiencia" },
            { number: "50%", label: "Reducción de Costos" },
            { number: "24/7", label: "Disponibilidad" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
};
