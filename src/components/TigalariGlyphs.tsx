import { motion } from "framer-motion";

// Stylized representations of Tigalari-inspired characters
const glyphs = [
  "ಅ", "ಆ", "ಇ", "ಈ", "ಉ", "ಊ", "ಎ", "ಏ", "ಐ", "ಒ",
  "ಓ", "ಔ", "ಕ", "ಖ", "ಗ", "ಘ", "ಙ", "ಚ", "ಛ", "ಜ",
];

interface TigalariGlyphsProps {
  className?: string;
  count?: number;
  opacity?: number;
}

const TigalariGlyphs = ({ className = "", count = 15, opacity = 0.06 }: TigalariGlyphsProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = 40 + Math.random() * 80;
        const rotation = Math.random() * 30 - 15;
        
        return (
          <motion.span
            key={i}
            className="absolute font-serif text-parchment-dark select-none"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              fontSize: size,
              opacity: opacity * (0.5 + Math.random() * 0.5),
              transform: `rotate(${rotation}deg)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: opacity * (0.5 + Math.random() * 0.5) }}
            transition={{ duration: 2, delay: i * 0.1 }}
          >
            {glyph}
          </motion.span>
        );
      })}
    </div>
  );
};

export default TigalariGlyphs;