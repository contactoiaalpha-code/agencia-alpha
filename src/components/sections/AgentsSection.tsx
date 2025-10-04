"use client";

import React from "react";
import {
  FiTrendingUp,
  FiLink,
  FiSettings,
  FiCpu,
  FiDatabase,
  FiMessageSquare,
} from "react-icons/fi";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { agentsContent } from "@/data/content";

export const AgentsSection: React.FC = () => {
  const agentTypes = [
    {
      name: "Agente de Ventas",
      description:
        "Automatiza el proceso de ventas completo, desde la prospección hasta el cierre.",
      icon: FiTrendingUp,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Agente de Soporte",
      description:
        "Proporciona atención al cliente 24/7 con respuestas personalizadas.",
      icon: FiMessageSquare,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Agente de Datos",
      description:
        "Analiza y procesa grandes volúmenes de información en tiempo real.",
      icon: FiDatabase,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Agente de Procesos",
      description: "Automatiza workflows complejos y tareas repetitivas.",
      icon: FiSettings,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="agentes" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Agentes IA:{" "}
            <span className="text-primary">El Futuro del Trabajo</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {agentsContent.description}
          </p>
        </AnimateOnScroll>

        {/* Características principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {agentsContent.features.map((feature, index) => {
            const IconComponent = require("react-icons/fi")[feature.icon];
            return (
              <AnimateOnScroll key={index}>
                <Card variant="glass" className="text-center group">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/30 transition-colors duration-300">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </Card>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Tipos de agentes */}
        <div className="mb-16">
          <AnimateOnScroll className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Nuestros Agentes Especializados
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Cada agente está diseñado para tareas específicas, asegurando
              máxima eficiencia y resultados excepcionales.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentTypes.map((agent, index) => {
              const IconComponent = agent.icon;
              return (
                <AnimateOnScroll key={index}>
                  <div
                    className={`relative bg-gradient-to-br ${agent.color} rounded-xl p-6 text-white group cursor-pointer hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="absolute top-4 right-4">
                      <FiCpu className="w-6 h-6 opacity-50" />
                    </div>
                    <div className="mb-4">
                      <IconComponent className="w-12 h-12 mb-3" />
                      <h4 className="text-lg font-semibold mb-2">
                        {agent.name}
                      </h4>
                      <p className="text-sm opacity-90">{agent.description}</p>
                    </div>
                    <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>

        {/* Cómo funcionan */}
        <AnimateOnScroll className="bg-gradient-to-r from-yellow-400/10 to-cyan-400/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Cómo Funcionan Nuestros Agentes?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold mr-4 flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Análisis Inicial
                    </h4>
                    <p className="text-gray-700">
                      Evaluamos tus procesos y necesidades específicas
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold mr-4 flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Personalización
                    </h4>
                    <p className="text-gray-700">
                      Configuramos el agente según tus requerimientos únicos
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold mr-4 flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Implementación
                    </h4>
                    <p className="text-gray-700">
                      Desplegamos el agente y comenzamos la optimización
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <div className="text-center">
                  <FiCpu className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">
                    Tecnología de Vanguardia
                  </h4>
                  <p className="text-gray-300">
                    Utilizamos los modelos de IA más avanzados y técnicas de
                    machine learning de última generación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
