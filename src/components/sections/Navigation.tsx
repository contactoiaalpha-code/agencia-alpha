"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { companyInfo, navigationItems } from "@/data/content";

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-32">
            {/* Logo Container */}
            <div className="flex items-center">
              {/* Logo Alpha */}
              <div className="flex-shrink-0">
                <img
                  src="/alpha-logo.svg"
                  alt="Agencia Alpha Logo"
                  className="h-48 w-48"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button href={whatsappUrl} variant="primary" size="sm">
                Contactar
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-primary p-2"
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-md" />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-gray-900 shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-primary">
                  {companyInfo.name}
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-primary"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? "text-primary bg-yellow-400/10"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                <div className="pt-4">
                  <Button
                    href={whatsappUrl}
                    variant="primary"
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contactar por WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
