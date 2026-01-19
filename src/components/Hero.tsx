import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import auroraGradient from "@/assets/aurora-gradient.jpg";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col bg-white relative overflow-hidden pt-16">
      {/* Top Section - Logo Name */}
      <div className="flex-1 flex items-start pt-12 lg:pt-20 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Digital Alchemy
          </p>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light italic tracking-tight text-navy leading-[0.9]">
            B<span className="text-primary">o</span>dhiX
          </h1>
        </motion.div>
      </div>

      {/* Middle Section - Aurora Gradient Band */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.8 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="w-full"
      >
        <img 
          src={auroraGradient} 
          alt="" 
          className="w-full h-24 md:h-32 lg:h-40 object-cover"
        />
      </motion.div>

      {/* Bottom Section - Tagline */}
      <div className="flex-1 flex flex-col justify-end pb-24 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-foreground leading-[1.1]">
            software studio<br />
            focused on <span className="text-primary">simplicity</span> / impact
          </h2>
          
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group whitespace-nowrap"
          >
            View our transmutations
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 right-8 cursor-pointer"
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground">(scroll down)</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
