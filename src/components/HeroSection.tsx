import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TigalariGlyphs from "./TigalariGlyphs";
import manuscriptBg from "@/assets/manuscript-texture.jpg";

const heroGlyphs = ["ತಿ", "ಗ", "ಲಾ", "ರಿ"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${manuscriptBg})` }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{ background: "var(--gradient-vignette)" }}
      />
      
      {/* Candle glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none candle-flicker"
        style={{ background: "var(--gradient-glow)" }}
      />
      
      {/* Background glyphs */}
      <TigalariGlyphs count={20} opacity={0.04} />
      
      {/* Main content */}
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        {/* Animated Tigalari characters */}
        <motion.div 
          className="flex justify-center gap-3 md:gap-4 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3, delayChildren: 0.5 }
            }
          }}
        >
          {heroGlyphs.map((glyph, i) => (
            <motion.span
              key={i}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-gold text-glow"
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  filter: "blur(0px)",
                  transition: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
                }
              }}
            >
              {glyph}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Title */}
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-display font-light text-foreground mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Tigalari — <br className="md:hidden" />
          <span className="text-gold">A Script Lost to Time,</span>
          <br />
          Brought Back to Life
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg text-muted-foreground font-serif italic mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
        >
          An immersive digital manuscript experience
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <Button 
            variant="sacred"
            size="lg"
            className="text-lg px-10 py-6"
            onClick={() => {
              document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Enter the Manuscript
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-2 bg-gold/50 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;