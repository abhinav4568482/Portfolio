import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiMongodb,
  SiPostgresql
} from 'react-icons/si';

interface FloatingIcon {
  id: number;
  icon: React.ReactNode;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const EnhancedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas animation for particles and geometric shapes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      type: 'dot' | 'line';
    }> = [];

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.2 + 0.05,
        type: 'dot'
      });
    }

    // Add some diagonal lines
    for (let i = 0; i < 5; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 50 + 30,
        opacity: Math.random() * 0.1 + 0.02,
        type: 'line'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        if (particle.type === 'dot') {
          // Draw dots
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(147, 197, 253, ${particle.opacity})`;
          ctx.fill();
        } else {
          // Draw diagonal lines
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
          ctx.strokeStyle = `rgba(147, 197, 253, ${particle.opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(147, 197, 253, ${0.08 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Floating tech icons
  const floatingIcons: FloatingIcon[] = [
    { id: 1, icon: <SiReact className="w-8 h-8" />, x: 10, y: 20, delay: 0, duration: 6 },
    { id: 2, icon: <SiJavascript className="w-8 h-8" />, x: 85, y: 15, delay: 1, duration: 7 },
    { id: 3, icon: <SiTypescript className="w-8 h-8" />, x: 15, y: 80, delay: 2, duration: 8 },
    { id: 4, icon: <SiHtml5 className="w-8 h-8" />, x: 80, y: 75, delay: 0.5, duration: 6.5 },
    { id: 5, icon: <SiCss3 className="w-8 h-8" />, x: 5, y: 50, delay: 1.5, duration: 7.5 },
    { id: 6, icon: <SiTailwindcss className="w-8 h-8" />, x: 90, y: 45, delay: 2.5, duration: 8.5 },
    { id: 7, icon: <SiNodedotjs className="w-8 h-8" />, x: 20, y: 10, delay: 3, duration: 9 },
    { id: 8, icon: <SiGit className="w-8 h-8" />, x: 75, y: 85, delay: 1.8, duration: 7.8 },
    { id: 9, icon: <SiMongodb className="w-8 h-8" />, x: 50, y: 5, delay: 0.8, duration: 6.8 },
    { id: 10, icon: <SiPostgresql className="w-8 h-8" />, x: 40, y: 90, delay: 2.2, duration: 8.2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas for particles and geometric shapes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />

      {/* Gradient blobs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)'
          }}
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 100%)'
          }}
          animate={{
            x: [0, 30, -50, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
        />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0">
        {floatingIcons.map((icon) => (
          <motion.div
            key={icon.id}
            className="absolute"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: icon.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: icon.delay,
            }}
          >
            <div className="text-blue-300 opacity-20 hover:opacity-40 transition-opacity duration-300">
              {icon.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle geometric shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-1/6 w-32 h-32 border border-blue-300/10 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-1/6 w-24 h-24 border border-blue-400/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        <motion.div
          className="absolute top-2/3 right-1/3 w-16 h-16 border border-blue-500/10 rotate-12"
          animate={{
            rotate: [12, 372],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
        />
      </div>
    </div>
  );
};

export default EnhancedBackground; 