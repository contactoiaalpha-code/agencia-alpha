"use client";

import React from "react";
import { FiTarget, FiHeadphones, FiZap } from "react-icons/fi";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { services } from "@/data/content";

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const icons = {
      FiTarget,
      FiHeadphones,
      FiZap,
    };
    return icons[iconName as keyof typeof icons] || FiTarget;
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Servicios que{" "}
            <span className="text-primary">Impulsan tu Éxito</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestra inteligencia artificial se adapta a tus necesidades para
            maximizar tu retorno de inversión.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon);

            return (
              <AnimateOnScroll key={service.id} className="h-full">
                <Card className="h-full flex flex-col group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-primary mb-3">
                      Beneficios principales:
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-cyan-400 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                      Saber más
                    </button>
                  </div>
                </Card>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Call to action */}
        <AnimateOnScroll className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400/10 via-cyan-400/10 to-yellow-400/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Agenda una consultoría gratuita y descubre cómo nuestras
              soluciones de IA pueden impulsar tu crecimiento.
            </p>
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                window.open(
                  `https://wa.me/529932500548?text=${encodeURIComponent(
                    "Hola, me interesa conocer más sobre sus servicios de inteligencia artificial."
                  )}`,
                  "_blank"
                );
              }}
            >
              Agenda tu Consultoría Gratuita
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
