import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TigalariGlyphs from "./TigalariGlyphs";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="relative py-32 overflow-hidden">
      <TigalariGlyphs count={10} opacity={0.03} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          {/* Opening quote */}
          <motion.p
            className="text-2xl md:text-4xl font-serif italic text-center text-parchment-dark mb-20 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            "Before print, before paper,<br />
            knowledge lived on leaves…"
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-20"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-3xl text-gold/60">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
          </motion.div>

          {/* Story paragraphs */}
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-foreground/80 font-serif">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <span className="text-5xl font-display text-gold float-left mr-4 mt-1 leading-none">T</span>
              igalari is an ancient Brahmic script, born along the monsoon-soaked coasts of Karnataka and 
              Kerala. For centuries, it carried the weight of Sanskrit wisdom — the Vedas, the Shastras, 
              the accumulated knowledge of generations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.3 }}
            >
              Not on paper, which would rot in the tropical humidity. Not carved in stone, too permanent 
              for evolving thought. But inscribed with iron styluses upon the dried leaves of palm trees — 
              organic, ephemeral, intimate.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.6 }}
              className="text-parchment-dark/70 italic text-center py-8"
            >
              These manuscripts were not just texts.<br />
              They were treasures, passed hand to hand,<br />
              generation to generation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.9 }}
            >
              The script's rounded forms evolved to accommodate the palm leaf — sharp angles would have 
              torn the delicate writing surface. Every curve tells a story of adaptation, of knowledge 
              finding its vessel.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;