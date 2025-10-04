import React from "react";
import { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Agencia Alpha",
  description:
    "Conoce nuestra política de privacidad y cómo protegemos tus datos personales en Agencia Alpha.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-dark mb-8">
              Política de Privacidad
            </h1>

            <p className="text-gray-600 mb-8">
              <strong>Última actualización:</strong>{" "}
              {new Date().toLocaleDateString("es-ES")}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                1. Información General
              </h2>
              <p className="text-gray-700 mb-4">
                En Agencia Alpha, respetamos su privacidad y nos comprometemos a
                proteger sus datos personales. Esta política de privacidad
                explica cómo recopilamos, utilizamos, divulgamos y
                salvaguardamos su información cuando visita nuestro sitio web o
                utiliza nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                2. Información que Recopilamos
              </h2>

              <h3 className="text-xl font-semibold text-dark mb-3">
                2.1 Información Personal
              </h3>
              <p className="text-gray-700 mb-4">
                Recopilamos información que usted nos proporciona directamente,
                incluyendo:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información de la empresa (si aplica)</li>
                <li>Detalles del proyecto o consulta</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark mb-3">
                2.2 Información Automática
              </h3>
              <p className="text-gray-700 mb-4">
                También podemos recopilar información automáticamente cuando
                utiliza nuestro sitio web:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Dirección IP</li>
                <li>Tipo de navegador y versión</li>
                <li>Sistema operativo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Referencias de búsqueda</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                3. Cómo Utilizamos su Información
              </h2>
              <p className="text-gray-700 mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Proporcionar y mantener nuestros servicios</li>
                <li>Procesar consultas y proporcionar respuestas</li>
                <li>Comunicarnos con usted sobre nuestros servicios</li>
                <li>Mejorar nuestro sitio web y servicios</li>
                <li>Cumplir con obligaciones legales</li>
                <li>Prevenir fraudes y actividades maliciosas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                4. Compartir Información
              </h2>
              <p className="text-gray-700 mb-4">
                No vendemos, comercializamos ni transferimos su información
                personal a terceros, excepto en las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Con su consentimiento explícito</li>
                <li>
                  Para proveedores de servicios que nos ayudan a operar nuestro
                  negocio
                </li>
                <li>Cuando sea requerido por ley</li>
                <li>Para proteger nuestros derechos, propiedad o seguridad</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                5. Seguridad de Datos
              </h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de seguridad técnicas, administrativas y
                físicas apropiadas para proteger su información personal contra
                acceso no autorizado, alteración, divulgación o destrucción. Sin
                embargo, ninguna transmisión por Internet es 100% segura.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                6. Cookies y Tecnologías Similares
              </h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies y tecnologías similares para mejorar su
                experiencia en nuestro sitio web. Puede controlar el uso de
                cookies a través de la configuración de su navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                7. Sus Derechos
              </h2>
              <p className="text-gray-700 mb-4">Usted tiene derecho a:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Acceder a sus datos personales</li>
                <li>Corregir datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Solicitar la portabilidad de datos</li>
                <li>Retirar su consentimiento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                8. Retención de Datos
              </h2>
              <p className="text-gray-700 mb-4">
                Conservamos su información personal solo durante el tiempo
                necesario para cumplir con los propósitos descritos en esta
                política, a menos que la ley exija o permita un período de
                retención más largo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                9. Cambios a esta Política
              </h2>
              <p className="text-gray-700 mb-4">
                Podemos actualizar esta política de privacidad periódicamente.
                Le notificaremos sobre cambios significativos mediante la
                publicación de la nueva política en nuestro sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                10. Contacto
              </h2>
              <p className="text-gray-700 mb-4">
                Si tiene preguntas sobre esta política de privacidad o nuestras
                prácticas de datos, contáctenos:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> contacto.ia.alpha@gmail.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Teléfono:</strong> +52 9932500548
                </p>
                <p className="text-gray-700">
                  <strong>Dirección:</strong> Villahermosa, Tabasco, México
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
