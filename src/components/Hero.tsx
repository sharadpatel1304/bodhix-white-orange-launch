import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  // Rotating phrases for movie credit effect
  const phrases = [
    "simplicity",
    "clarity", 
    "focus",
    "impact"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Word animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden px-6">
      {/* Main Content - Centered */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-lg md:text-xl font-normal tracking-wide text-navy">
            B<span className="text-primary">o</span>dhiX
          </h2>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-foreground leading-[1.2] mb-4"
        >
          <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">We</motion.span>
          <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">make</motion.span>
          <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">custom</motion.span>
          <motion.span variants={wordVariants} className="inline-block">software</motion.span>
          <br />
          <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">built</motion.span>
          <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">around</motion.span>
          <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">your</motion.span>
          <motion.span variants={wordVariants} className="inline-block">business</motion.span>
        </motion.h1>

        {/* Scrolling phrase - movie credit style */}
        <div className="h-16 md:h-20 lg:h-24 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-primary"
            >
              {phrases[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-16"
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            see our work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/50 to-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
