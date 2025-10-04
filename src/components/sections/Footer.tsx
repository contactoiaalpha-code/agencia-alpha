import React from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { companyInfo, socialLinks } from "@/data/content";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/alpha-logo.svg"
                alt="Agencia Alpha Logo"
                className="h-10 w-10"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas en inteligencia artificial y automatización.
              Transformamos tu negocio con soluciones innovadoras y eficientes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <FiMapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>{companyInfo.location}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiPhone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <FiMail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Lead Generation Agents
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Customer Support Agents
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  N8N Automations
                </a>
              </li>
              <li>
                <a
                  href="#agentes"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Agentes IA
                </a>
              </li>
            </ul>
          </div>

          {/* Información legal y contacto */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>

            {/* Redes sociales */}
            <div className="mt-6">
              <h5 className="text-sm font-medium text-gray-400 mb-3">
                Síguenos
              </h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = require("react-icons/fi")[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.name}. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Desarrollado con ❤️ en {companyInfo.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
