import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  // Word animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden px-6">
      {/* Main Content - Centered */}
      <div className="max-w-5xl mx-auto text-center">
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
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-foreground leading-[1.1] mb-8"
        >
          <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">Transforming</motion.span>
          <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">Ideas</motion.span>
          <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">into</motion.span>
          <br className="hidden md:block" />
          <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">Elegant</motion.span>
          <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">Digital</motion.span>
          <motion.span variants={wordVariants} className="inline-block">Solutions:</motion.span>
          <br />
          <motion.span 
            variants={wordVariants} 
            className="inline-block text-primary"
          >
            Simplicity & Impact
          </motion.span>
        </motion.h1>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-12"
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            View our work
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
