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
    <section className="min-h-screen flex flex-col justify-center bg-background relative overflow-hidden px-6 lg:px-20">
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Large background number */}
      <div className="absolute top-1/2 right-10 lg:right-20 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[25vw] font-extralight text-foreground/[0.02] leading-none tracking-tighter">
          BX
        </span>
      </div>

      <div className="relative z-10 max-w-5xl">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="h-[1px] w-10 bg-primary/40" />
          <span className="text-primary text-[10px] font-mono uppercase tracking-[0.5em]">
            Software Studio
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extralight text-navy tracking-tighter leading-[1.05] mb-6"
        >
          We craft software <br />
          that drives{" "}
          <span className="italic font-serif text-primary">results</span>.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground/70 font-light max-w-xl mb-4 leading-relaxed"
        >
          Custom solutions built around your business — reliable, 
          scalable, and designed to perform from day one.
        </motion.p>

        {/* Rotating phrase */}
        <div className="h-8 overflow-hidden mb-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-muted-foreground/40 font-mono uppercase tracking-[0.3em]"
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
          className="flex flex-wrap items-center gap-6"
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

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 pt-10 border-t border-border/40 flex flex-wrap gap-10 md:gap-16"
        >
          {[
            { num: "50+", label: "Projects Delivered" },
            { num: "98%", label: "Client Retention" },
            { num: "5+", label: "Years of Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-extralight text-navy tracking-tight">{stat.num}</p>
              <p className="text-[11px] text-muted-foreground/50 uppercase tracking-[0.2em] mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom mark */}
      <div className="absolute bottom-10 left-6 lg:left-20 flex items-center gap-4">
        <div className="w-10 h-[1px] bg-border/50" />
        <span className="text-[10px] text-muted-foreground/25 uppercase tracking-[0.5em]">
          MMXXVI
        </span>
      </div>
    </section>
  );
};

export default Hero;
