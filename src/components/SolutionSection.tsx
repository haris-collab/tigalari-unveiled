import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: "var(--gradient-glow)" }}
      />
      
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
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
            The Revival
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-5xl font-display font-light text-foreground mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            What I Built
          </motion.h2>
        </motion.div>

        {/* Poetic description */}
        <motion.div
          className="text-center mb-16 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-2xl md:text-3xl font-serif text-foreground/60">Not scanned pages.</p>
          <p className="text-2xl md:text-3xl font-serif text-foreground/70">Not static text.</p>
          <p className="text-2xl md:text-3xl font-serif text-gold italic">But a living manuscript.</p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {[
            {
              title: "Page-Turning Experience",
              description: "Feel the weight of each leaf as you navigate through ancient wisdom, just as scholars did centuries ago.",
              icon: "📜"
            },
            {
              title: "Dual Script Display",
              description: "Original Tigalari glyphs paired with translated text, bridging the gap between ancient and modern.",
              icon: "✦"
            },
            {
              title: "Read-Aloud Narration",
              description: "Hear the words spoken as they were meant to be heard, the sacred syllables filling the space.",
              icon: "🔊"
            },
            {
              title: "Word-by-Word Highlighting",
              description: "Follow along as each word illuminates, connecting sound to symbol, meaning to form.",
              icon: "✨"
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-card/40 backdrop-blur-sm border border-gold/10 rounded-lg p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.15 }}
              whileHover={{ borderColor: "hsl(43, 75%, 55%, 0.3)" }}
            >
              {/* Glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at center, hsl(43 75% 55% / 0.05) 0%, transparent 70%)" }}
              />
              
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-serif text-gold mb-3">{feature.title}</h3>
              <p className="text-foreground/60 font-serif leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Craftsmanship note */}
        <motion.p
          className="text-center text-muted-foreground font-serif italic mt-16 text-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Built with reverence. Designed with intention.<br />
          This is craft, not just code.
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionSection;