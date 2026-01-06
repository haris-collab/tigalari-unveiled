import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhyItMattersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />
      
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
          >
            Purpose
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-5xl font-display font-light text-foreground mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Why This Matters
          </motion.h2>
        </motion.div>

        {/* Core message */}
        <motion.div
          className="space-y-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="text-xl md:text-2xl font-serif text-foreground/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Preservation is more than digitization.<br />
            It is making ancient knowledge <span className="text-gold italic">readable</span> again.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-2xl text-gold/40">✦</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/40" />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl font-serif text-foreground/70 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Technology becomes meaningful<br />
            when it serves something greater than itself.
          </motion.p>

          <motion.p
            className="text-lg font-serif text-muted-foreground italic pt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.6 }}
          >
            Respecting tradition. Embracing innovation.<br />
            Creating bridges across time.
          </motion.p>
        </motion.div>

        {/* Visual element: connected dots */}
        <motion.div
          className="flex justify-center items-center gap-2 mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gold/40"
              animate={{ 
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;