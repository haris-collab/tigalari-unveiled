import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadingGlyphs = ["ಅ", "ಆ", "ಇ", "ಈ", "ಉ"];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden bg-charcoal">
      {/* Darker overlay for this section */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal to-background" />
      
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          <motion.span
            className="text-gold/60 text-sm uppercase tracking-[0.3em] font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            The Fading
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-5xl font-display font-light text-foreground mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            But Time is Unkind to Leaves
          </motion.h2>
        </motion.div>

        {/* Fading glyphs animation */}
        <motion.div
          className="flex justify-center gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {fadingGlyphs.map((glyph, i) => (
            <motion.span
              key={i}
              className="text-4xl md:text-6xl font-serif text-parchment-dark"
              initial={{ opacity: 0.8 }}
              animate={isInView ? {
                opacity: [0.8, 0.3, 0.1, 0.3, 0.6],
                filter: ["blur(0px)", "blur(1px)", "blur(2px)", "blur(1px)", "blur(0px)"],
              } : {}}
              transition={{
                duration: 4,
                delay: i * 0.4,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              {glyph}
            </motion.span>
          ))}
        </motion.div>

        {/* Problem statements */}
        <div className="space-y-12 text-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-xl md:text-2xl font-serif text-foreground/70 leading-relaxed">
              The script is rarely taught anymore.
            </p>
            <motion.div
              className="h-px w-24 mx-auto mt-6 bg-gold/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p className="text-xl md:text-2xl font-serif text-foreground/60 leading-relaxed">
              Manuscripts grow fragile, edges crumbling,<br />
              ink fading into the fibers.
            </p>
            <motion.div
              className="h-px w-24 mx-auto mt-6 bg-gold/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <p className="text-xl md:text-2xl font-serif text-foreground/50 leading-relaxed">
              Most who glimpse these treasures<br />
              cannot read what survives.
            </p>
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl font-serif italic text-gold/40 pt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 2 }}
          >
            The voice grows quieter with each passing year.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;