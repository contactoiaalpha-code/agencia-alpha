import React from "react";
import { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Agencia Alpha",
  description:
    "Conoce los términos y condiciones de uso de los servicios de Agencia Alpha.",
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-dark mb-8">
              Términos y Condiciones
            </h1>

            <p className="text-gray-600 mb-8">
              <strong>Última actualización:</strong>{" "}
              {new Date().toLocaleDateString("es-ES")}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                1. Aceptación de Términos
              </h2>
              <p className="text-gray-700 mb-4">
                Al acceder y utilizar los servicios de Agencia Alpha, usted
                acepta estar sujeto a estos términos y condiciones. Si no está
                de acuerdo con alguno de estos términos, no debe utilizar
                nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                2. Descripción de Servicios
              </h2>
              <p className="text-gray-700 mb-4">
                Agencia Alpha proporciona servicios de inteligencia artificial,
                incluyendo:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Agentes de generación de leads</li>
                <li>Agentes de soporte al cliente</li>
                <li>Automatizaciones N8N</li>
                <li>Consultoría en inteligencia artificial</li>
                <li>Soluciones personalizadas de IA</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                3. Uso Aceptable
              </h2>
              <p className="text-gray-700 mb-4">
                Usted acepta utilizar nuestros servicios de manera legal y
                ética. Está prohibido:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>
                  Utilizar los servicios para actividades ilegales o
                  fraudulentas
                </li>
                <li>
                  Interferir con el funcionamiento normal de nuestros sistemas
                </li>
                <li>Acceder a datos o sistemas sin autorización</li>
                <li>
                  Compartir credenciales de acceso con terceros no autorizados
                </li>
                <li>
                  Realizar ingeniería inversa o intentar copiar nuestros
                  sistemas
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                4. Propiedad Intelectual
              </h2>
              <p className="text-gray-700 mb-4">
                Todo el contenido, tecnología y propiedad intelectual
                relacionada con nuestros servicios es propiedad exclusiva de
                Agencia Alpha. Esto incluye:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Algoritmos y modelos de inteligencia artificial</li>
                <li>Código fuente y aplicaciones desarrolladas</li>
                <li>Marca, logotipos y elementos de diseño</li>
                <li>Documentación y materiales educativos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                5. Tarifas y Pagos
              </h2>
              <p className="text-gray-700 mb-4">
                Las tarifas por nuestros servicios se acuerdan individualmente
                con cada cliente. Los pagos deben realizarse según los términos
                establecidos en el contrato correspondiente.
              </p>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar nuestras tarifas con
                previo aviso. Los cambios no afectarán contratos ya existentes
                durante su vigencia.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                6. Confidencialidad
              </h2>
              <p className="text-gray-700 mb-4">
                Ambas partes se comprometen a mantener la confidencialidad de la
                información propietaria y sensible compartida durante la
                relación comercial.
              </p>
              <p className="text-gray-700 mb-4">
                Esta obligación de confidencialidad permanece vigente incluso
                después de la terminación de la relación contractual.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                7. Limitación de Responsabilidad
              </h2>
              <p className="text-gray-700 mb-4">
                Agencia Alpha no será responsable por:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Daños indirectos, incidentales o consecuentes</li>
                <li>Pérdidas de ingresos o ganancias</li>
                <li>Pérdida o corrupción de datos</li>
                <li>Interrupciones del negocio</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Nuestra responsabilidad total se limita al monto pagado por el
                cliente en los últimos 12 meses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                8. Garantías
              </h2>
              <p className="text-gray-700 mb-4">
                Ofrecemos una garantía de satisfacción en todos nuestros
                servicios. Si no está completamente satisfecho con los
                resultados, trabajaremos con usted para encontrar una solución
                adecuada.
              </p>
              <p className="text-gray-700 mb-4">
                No garantizamos resultados específicos, ya que estos dependen de
                múltiples factores incluyendo la implementación correcta y el
                uso adecuado de nuestras soluciones.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                9. Terminación
              </h2>
              <p className="text-gray-700 mb-4">
                Cualquiera de las partes puede terminar la relación contractual
                con un aviso previo de 30 días. Los pagos pendientes deberán ser
                liquidados antes de la terminación.
              </p>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de suspender o terminar inmediatamente
                el servicio en caso de violación grave de estos términos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                10. Modificaciones
              </h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar estos términos y
                condiciones en cualquier momento. Los cambios serán efectivos
                inmediatamente después de su publicación en nuestro sitio web.
              </p>
              <p className="text-gray-700 mb-4">
                Es su responsabilidad revisar periódicamente estos términos para
                estar al tanto de cualquier modificación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                11. Legislación Aplicable
              </h2>
              <p className="text-gray-700 mb-4">
                Estos términos se rigen por las leyes de México. Cualquier
                disputa será resuelta en los tribunales competentes de
                Villahermosa, Tabasco.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                12. Contacto
              </h2>
              <p className="text-gray-700 mb-4">
                Para cualquier pregunta sobre estos términos y condiciones,
                contáctenos:
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

            <div className="mt-12 p-6 bg-primary/5 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                Al utilizar nuestros servicios, confirma que ha leído, entendido
                y aceptado estos términos y condiciones.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
