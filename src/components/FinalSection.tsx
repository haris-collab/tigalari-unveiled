import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import TigalariGlyphs from "./TigalariGlyphs";

const FinalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-40 overflow-hidden">
      {/* Ambient glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center bottom, hsl(35 90% 60% / 0.1) 0%, transparent 60%)" }}
      />
      
      <TigalariGlyphs count={12} opacity={0.03} />
      
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main message */}
        <motion.div
          className="space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.p
            className="text-2xl md:text-4xl lg:text-5xl font-serif text-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            This is not just a script.
          </motion.p>
          
          <motion.p
            className="text-2xl md:text-4xl lg:text-5xl font-serif text-gold italic text-glow leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            It is a voice,<br />
            waiting to be heard.
          </motion.p>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
          <motion.span
            className="text-4xl text-gold/60"
            animate={{ 
              textShadow: [
                "0 0 20px hsl(43 75% 55% / 0.3)",
                "0 0 40px hsl(43 75% 55% / 0.5)",
                "0 0 20px hsl(43 75% 55% / 0.3)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ॐ
          </motion.span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.6 }}
        >
         <a
  href="https://paramtigalari.netlify.app"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    variant="sacred"
    size="lg"
    className="text-lg px-12 py-7"
  >
    Begin Reading
  </Button>
</a>

        </motion.div>

        {/* Footer note */}
        <motion.p
          className="mt-20 text-sm text-muted-foreground font-serif"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
        >
          A project dedicated to preserving cultural heritage through technology
        </motion.p>
      </div>
    </section>
  );
};

export default FinalSection;