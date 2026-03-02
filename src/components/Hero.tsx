import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/laughing-buddha.png";

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
    <section className="min-h-screen flex items-center bg-[#fcfcfc] relative overflow-hidden px-6 lg:px-20 pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[45%] h-[65%] bg-primary/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[55%] bg-blue-400/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[1px] w-10 bg-primary/30" />
              <span className="text-primary text-[10px] font-mono uppercase tracking-[0.5em] block">
                Digital Atelier
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-extralight text-navy tracking-tighter leading-[0.85] mb-8">
              We build <br />
              <span className="italic font-serif text-primary/80">purpose</span> <br />
              into code.
            </h1>
          </motion.div>

          <div className="h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground/60 font-light tracking-tight"
              >
                Driven by {phrases[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <Link 
              to="/projects" 
              className="bg-navy text-white px-10 py-5 rounded-full text-sm font-medium hover:bg-primary transition-all duration-500 shadow-xl shadow-navy/5"
            >
              Selected Works
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

        {/* RIGHT COLUMN */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          {/* Glass Panel */}
          <div className="relative w-72 md:w-80 h-[480px] rounded-[48px] border border-white/80 backdrop-blur-3xl bg-white/40 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.06)] overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/70 opacity-90 pointer-events-none" />

            {/* PERFECTLY CENTERED BUDDHA */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                src={logo}
                alt="BodhiX Buddha"
                className="w-[75%] h-auto object-contain pointer-events-none"
              />
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-12 left-10 right-10">
              <div className="w-12 h-[1px] bg-primary/40 mb-6" />
              <p className="text-[10px] text-muted-foreground/30 uppercase tracking-[0.5em] mb-2 font-mono">
                Archive
              </p>
              <p className="text-navy text-xl font-light tracking-[0.15em] uppercase">
                BodhiX
              </p>
            </div>
          </div>

          <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-[70px]" />
        </motion.div>
      </div>

      {/* Footer Mark */}
      <div className="absolute bottom-12 left-6 lg:left-20 flex items-center gap-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-border/60" />
          <span className="text-[10px] text-muted-foreground/30 uppercase tracking-[0.6em]">
            MMXXVI
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;