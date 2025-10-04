"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { companyInfo, contactOptions } from "@/data/content";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  area: z.string().min(1, "Selecciona un área de interés"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  acepto: z
    .boolean()
    .refine((val) => val === true, "Debes aceptar los términos y condiciones"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <Card className="text-center p-12">
              <div>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheck className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-dark mb-4">
                  ¡Mensaje Enviado!
                </h2>
                <p className="text-gray-600 mb-8">
                  Gracias por contactarnos. Hemos recibido tu mensaje y nos
                  pondremos en contacto contigo muy pronto.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary hover:bg-primary-dark text-dark px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contáctanos y{" "}
            <span className="text-primary">Transforma tu Negocio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Listo para llevar tu empresa al siguiente nivel? Nuestro equipo de
            expertos está aquí para ayudarte.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <AnimateOnScroll>
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-dark mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <FiPhone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-dark">Teléfono</p>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <FiMail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-dark">Email</p>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <FiMapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-dark">Ubicación</p>
                      <p className="text-gray-600">{companyInfo.location}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <h3 className="text-xl font-bold text-dark mb-4">
                  ¿Por qué elegirnos?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Consultoría personalizada y gratuita
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Soluciones adaptadas a tu industria
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Soporte técnico especializado
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Garantía de resultados
                  </li>
                </ul>
              </Card>
            </div>
          </AnimateOnScroll>

          {/* Formulario de contacto */}
          <AnimateOnScroll delay={0.2}>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-dark mb-6">
                Envíanos un Mensaje
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    {...register("nombre")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Tu nombre completo"
                  />
                  {errors.nombre && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="area"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Área de interés *
                  </label>
                  <select
                    id="area"
                    {...register("area")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  >
                    <option value="">Selecciona un área</option>
                    {contactOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.area && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.area.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    rows={5}
                    {...register("mensaje")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                  />
                  {errors.mensaje && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.mensaje.message}
                    </p>
                  )}
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="acepto"
                    {...register("acepto")}
                    className="mt-1 mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="acepto" className="text-sm text-gray-600">
                    Acepto la{" "}
                    <a
                      href="/privacy"
                      className="text-primary hover:underline"
                      target="_blank"
                    >
                      Política de Privacidad
                    </a>{" "}
                    y los{" "}
                    <a
                      href="/terms"
                      className="text-primary hover:underline"
                      target="_blank"
                    >
                      Términos y Condiciones
                    </a>
                    *
                  </label>
                </div>
                {errors.acepto && (
                  <p className="text-sm text-red-600">
                    {errors.acepto.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-black py-4 px-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
