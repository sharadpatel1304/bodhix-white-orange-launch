import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-16">
      {/* Content - Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
        <div className="max-w-3xl mx-auto">
          {/* Small caps label */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-6"
          >
            Digital Alchemy
          </motion.p>
          
          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-normal italic tracking-tight text-navy leading-[1.1]"
          >
            B<span className="text-primary">o</span>dhiX
          </motion.h1>
          
          {/* Subtext - Simple and straightforward */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto"
          >
            We build software that works. Simple tools, powerful results.
          </motion.p>
          
          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 mt-10 text-sm text-foreground hover:text-primary transition-colors group"
            >
              View our transmutations
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
          <div className="w-px h-8 bg-border" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
