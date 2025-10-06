"use client";

import React from "react";
import { FiTarget, FiUsers, FiAward, FiMapPin } from "react-icons/fi";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { aboutUsContent, companyInfo } from "@/data/content";

export const AboutUsSection: React.FC = () => {
  const values = [
    {
      icon: FiTarget,
      title: "Innovación Constante",
      description: "Siempre a la vanguardia de las últimas tecnologías en IA",
    },
    {
      icon: FiUsers,
      title: "Compromiso Total",
      description: "Dedicados al éxito y satisfacción de nuestros clientes",
    },
    {
      icon: FiAward,
      title: "Excelencia Técnica",
      description: "Estándares más altos en desarrollo y implementación",
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <AnimateOnScroll>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                {aboutUsContent.title}
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {aboutUsContent.description}
              </p>

              {/* Visión y Misión */}
              <div className="space-y-6 mb-8">
                <Card variant="glass" className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Nuestra Visión
                  </h3>
                  <p className="text-gray-300">{aboutUsContent.vision}</p>
                </Card>

                <Card variant="glass" className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Nuestra Misión
                  </h3>
                  <p className="text-gray-300">{aboutUsContent.mission}</p>
                </Card>
              </div>

              {/* Ubicación */}
              <div className="flex items-center text-gray-300 mb-8">
                <FiMapPin className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">{companyInfo.location}</p>
                  <p className="text-sm text-gray-400">
                    Atendemos clientes en toda la región con soporte técnico
                    especializado
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Valores y estadísticas */}
          <div className="space-y-8">
            {/* Valores */}
            <AnimateOnScroll>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Nuestros Valores
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {aboutUsContent.values.map((value, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-gray-300">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Estadísticas */}
            <AnimateOnScroll>
              <Card variant="gradient" className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  ¿Por qué elegir Agencia Alpha?
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      5+
                    </div>
                    <div className="text-gray-300 text-sm">
                      Años de Experiencia
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      150+
                    </div>
                    <div className="text-gray-300 text-sm">
                      Proyectos Exitosos
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      99%
                    </div>
                    <div className="text-gray-300 text-sm">
                      Clientes Satisfechos
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      24/7
                    </div>
                    <div className="text-gray-300 text-sm">Soporte Técnico</div>
                  </div>
                </div>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Llamada a la acción */}
        <AnimateOnScroll className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Quieres ser parte de nuestra historia de éxito?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a las empresas que ya han transformado sus procesos con
              nuestras soluciones de IA.
            </p>
            <button
              className="bg-primary hover:bg-primary-dark text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                window.open(
                  `https://wa.me/${companyInfo.phone.replace(
                    /[^0-9]/g,
                    ""
                  )}?text=${encodeURIComponent(
                    "Hola, me interesa conocer más sobre Agencia Alpha y sus servicios."
                  )}`,
                  "_blank"
                );
              }}
            >
              Comienza tu Transformación
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
