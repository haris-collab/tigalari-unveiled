import { motion } from "framer-motion";
import { useMemo } from "react";

interface DustParticle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

const DustParticles = () => {
  const particles = useMemo<DustParticle[]>(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 10,
      size: 1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gold/30"
          style={{
            left: `${particle.x}%`,
            bottom: "-10px",
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.random() * 40 - 20],
            opacity: [0, particle.opacity, particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default DustParticles;