"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface Connection {
  from: Particle;
  to: Particle;
  opacity: number;
}

export const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configurar el canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Crear partículas
    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = 80;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: i % 3 === 0 ? "#00D4FF" : i % 3 === 1 ? "#FF6B35" : "#00FF88",
        });
      }

      particlesRef.current = particles;
    };

    // Crear conexiones
    const createConnections = () => {
      const connections: Connection[] = [];
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            connections.push({
              from: particles[i],
              to: particles[j],
              opacity: ((150 - distance) / 150) * 0.3,
            });
          }
        }
      }

      connectionsRef.current = connections;
    };

    // Animar
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Actualizar partículas
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rebote en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mantener dentro del canvas
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Atracción hacia el mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = ((200 - distance) / 200) * 0.01;
          particle.vx += dx * force;
          particle.vy += dy * force;
        }

        // Limitar velocidad
        const speed = Math.sqrt(
          particle.vx * particle.vx + particle.vy * particle.vy
        );
        if (speed > 2) {
          particle.vx = (particle.vx / speed) * 2;
          particle.vy = (particle.vy / speed) * 2;
        }
      });

      // Dibujar conexiones
      connectionsRef.current.forEach((connection) => {
        const dx = connection.to.x - connection.from.x;
        const dy = connection.to.y - connection.from.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(connection.from.x, connection.from.y);
          ctx.lineTo(connection.to.x, connection.to.y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${connection.opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Dibujar partículas
      particlesRef.current.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Crear nuevas conexiones
      createConnections();

      animationRef.current = requestAnimationFrame(animate);
    };

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Inicializar
    createParticles();
    createConnections();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        }}
      />
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" />
    </div>
  );
};
