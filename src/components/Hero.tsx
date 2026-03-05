import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = ["simplicity", "clarity", "focus", "impact"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden px-6 lg:px-20">
      
      {/* Minimal ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="h-[1px] w-8 bg-primary/30" />
          <span className="text-primary text-[10px] font-mono uppercase tracking-[0.5em]">
            Software Studio
          </span>
          <span className="h-[1px] w-8 bg-primary/30" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extralight text-navy tracking-tight leading-[1.1] mb-6"
        >
          We craft software
          <br />
          that drives{" "}
          <span className="italic font-serif text-primary">results</span>.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground/60 font-light max-w-lg mx-auto mb-6 leading-relaxed"
        >
          Custom solutions built around your business — reliable, 
          scalable, and designed to perform from day one.
        </motion.p>

        {/* Rotating phrase */}
        <div className="h-7 overflow-hidden mb-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
              className="text-xs text-muted-foreground/35 font-mono uppercase tracking-[0.3em]"
            >
              Built on {phrases[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link 
            to="/projects" 
            className="bg-navy text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-primary transition-all duration-500 shadow-lg shadow-navy/10"
          >
            View Our Work
          </Link>

          <Link 
            to="/contact" 
            className="text-muted-foreground hover:text-navy text-sm font-medium transition-colors flex items-center gap-2 group"
          >
            Start a project 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
