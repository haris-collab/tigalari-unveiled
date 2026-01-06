import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import manuscriptPageBg from "@/assets/manuscript-page.jpg";

const manuscriptPages = [
  { id: 1, content: "ಓಂ ನಮಃ ಶಿವಾಯ", translation: "Om Namah Shivaya" },
  { id: 2, content: "ಸರ್ವೇ ಭವಂತು ಸುಖಿನಃ", translation: "May all beings be happy" },
  { id: 3, content: "ಅಸತೋ ಮಾ ಸದ್ಗಮಯ", translation: "Lead me from unreal to real" },
];

const ShowcaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentPage, setCurrentPage] = useState(0);
  const [highlightedWord, setHighlightedWord] = useState(-1);

  const words = manuscriptPages[currentPage].content.split(" ");

  // Auto-highlight words
  const startHighlighting = () => {
    setHighlightedWord(0);
    words.forEach((_, i) => {
      setTimeout(() => setHighlightedWord(i), (i + 1) * 600);
    });
    setTimeout(() => setHighlightedWord(-1), words.length * 600 + 500);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-umber">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-umber to-background" />
      
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          <motion.span
            className="text-gold/60 text-sm uppercase tracking-[0.3em] font-serif"
          >
            Experience
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-5xl font-display font-light text-foreground mt-4"
          >
            The Manuscript in Motion
          </motion.h2>
        </motion.div>

        {/* Manuscript mockup */}
        <motion.div
          className="relative max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Thread binding visual */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-x-1/2 z-20" />
          <div className="absolute left-1/2 top-4 w-4 h-4 rounded-full border-2 border-gold/30 -translate-x-1/2 z-20" />
          <div className="absolute left-1/2 bottom-4 w-4 h-4 rounded-full border-2 border-gold/30 -translate-x-1/2 z-20" />

          {/* Manuscript page */}
          <motion.div
            key={currentPage}
            className="relative border border-gold/20 rounded-sm p-12 md:p-16 backdrop-blur-sm overflow-hidden"
            style={{
              boxShadow: "var(--shadow-manuscript), inset 0 0 100px hsl(38 45% 88% / 0.03)",
            }}
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${manuscriptPageBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-umber/80 to-charcoal/90" />
            
            {/* Texture overlay */}
            <div className="manuscript-texture absolute inset-0 rounded-sm" />
            
            {/* Content */}
            <div className="relative z-10 text-center space-y-8">
              {/* Tigalari text with highlighting */}
              <div className="text-3xl md:text-5xl font-serif text-parchment leading-relaxed">
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block mx-1 transition-colors duration-300 ${
                      highlightedWord === i ? "text-gold text-glow" : ""
                    }`}
                    animate={highlightedWord === i ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              
              {/* Divider */}
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-gold/30" />
                <span className="text-gold/40">❖</span>
                <div className="h-px w-12 bg-gold/30" />
              </div>
              
              {/* Translation */}
              <p className="text-lg md:text-xl font-serif italic text-foreground/60">
                {manuscriptPages[currentPage].translation}
              </p>
            </div>

            {/* Page number */}
            <div className="absolute bottom-4 right-6 text-sm text-muted-foreground font-serif">
              {currentPage + 1} / {manuscriptPages.length}
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="text-gold/60 hover:text-gold disabled:opacity-30 transition-colors font-serif text-lg"
            >
              ← Previous
            </button>
            
            <button
              onClick={startHighlighting}
              className="px-6 py-2 border border-gold/30 rounded-sm text-gold/80 hover:bg-gold/10 hover:text-gold transition-all font-serif"
            >
              ▶ Read Aloud
            </button>
            
            <button
              onClick={() => setCurrentPage(p => Math.min(manuscriptPages.length - 1, p + 1))}
              disabled={currentPage === manuscriptPages.length - 1}
              className="text-gold/60 hover:text-gold disabled:opacity-30 transition-colors font-serif text-lg"
            >
              Next →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;