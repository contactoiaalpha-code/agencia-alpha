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
  originX: number;
  originY: number;
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
      const particleCount = 120; // Aumentado para mejor cobertura

      for (let i = 0; i < particleCount; i++) {
        const originX = Math.random() * canvas.width;
        const originY = Math.random() * canvas.height;

        particles.push({
          x: originX,
          y: originY,
          originX: originX,
          originY: originY,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 3 + 1.5,
          opacity: Math.random() * 0.6 + 0.4,
          color: i % 3 === 0 ? "#00D4FF" : i % 3 === 1 ? "#FF6B35" : "#00FF88",
        });
      }

      particlesRef.current = particles;
    };

    // Crear conexiones
    const createConnections = () => {
      const connections: Connection[] = [];
      const particles = particlesRef.current;
      const maxDistance = 180; // Aumentado para más conexiones

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            connections.push({
              from: particles[i],
              to: particles[j],
              opacity: ((maxDistance - distance) / maxDistance) * 0.4,
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
        // Movimiento normal
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rebote en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mantener dentro del canvas
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Atracción hacia el mouse
        const dxMouse = mouseRef.current.x - particle.x;
        const dyMouse = mouseRef.current.y - particle.y;
        const distanceToMouse = Math.sqrt(
          dxMouse * dxMouse + dyMouse * dyMouse
        );

        if (mouseRef.current.x > 0 && distanceToMouse < 250) {
          // Repulsión del mouse (smooth)
          const force = ((250 - distanceToMouse) / 250) * 0.015;
          particle.vx -= dxMouse * force;
          particle.vy -= dyMouse * force;
        } else {
          // Retorno suave a la posición original
          const dxOrigin = particle.originX - particle.x;
          const dyOrigin = particle.originY - particle.y;
          const distanceToOrigin = Math.sqrt(
            dxOrigin * dxOrigin + dyOrigin * dyOrigin
          );

          if (distanceToOrigin > 5) {
            const returnForce = 0.002;
            particle.vx += dxOrigin * returnForce;
            particle.vy += dyOrigin * returnForce;
          }
        }

        // Limitar velocidad para movimiento suave
        const speed = Math.sqrt(
          particle.vx * particle.vx + particle.vy * particle.vy
        );
        if (speed > 1.5) {
          particle.vx = (particle.vx / speed) * 1.5;
          particle.vy = (particle.vy / speed) * 1.5;
        }

        // Fricción para suavidad
        particle.vx *= 0.98;
        particle.vy *= 0.98;
      });

      // Dibujar conexiones
      connectionsRef.current.forEach((connection) => {
        const dx = connection.to.x - connection.from.x;
        const dy = connection.to.y - connection.from.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 180) {
          ctx.beginPath();
          ctx.moveTo(connection.from.x, connection.from.y);
          ctx.lineTo(connection.to.x, connection.to.y);

          // Gradiente en las conexiones para efecto más profesional
          const gradient = ctx.createLinearGradient(
            connection.from.x,
            connection.from.y,
            connection.to.x,
            connection.to.y
          );
          gradient.addColorStop(0, `rgba(0, 212, 255, ${connection.opacity})`);
          gradient.addColorStop(
            0.5,
            `rgba(255, 107, 53, ${connection.opacity * 0.8})`
          );
          gradient.addColorStop(1, `rgba(0, 255, 136, ${connection.opacity})`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      // Dibujar partículas con efecto de brillo
      particlesRef.current.forEach((particle) => {
        // Halo exterior
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.5, `${particle.color}33`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.fill();

        // Partícula central
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

    const handleMouseLeave = () => {
      // Resetear posición del mouse cuando sale de la pantalla
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Inicializar
    createParticles();
    createConnections();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
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
