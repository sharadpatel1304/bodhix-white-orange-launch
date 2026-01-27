import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  // Tagline words for staggered animation
  const line1Words = ["software", "studio"];
  const line2Words = ["focused", "on"];
  const line3Words = ["simplicity", "/", "impact"];

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    })
  };

  return (
    <section className="min-h-screen flex flex-col bg-background relative overflow-hidden pt-24">
      {/* Top Section - Logo Name */}
      <div className="flex-1 flex items-start pt-12 lg:pt-20 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-navy leading-[0.9]">
            B<span className="text-primary">o</span>dhiX
          </h1>
        </motion.div>
      </div>

      {/* Middle Section - Live Animated Gradient Band */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.8 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="w-full h-24 md:h-32 lg:h-40 relative overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 animate-gradient-flow bg-[length:300%_100%]" 
          style={{
            background: `linear-gradient(
              90deg, 
              hsl(var(--primary)) 0%, 
              hsl(220, 70%, 50%) 20%, 
              hsl(var(--primary)) 40%, 
              hsl(220, 70%, 40%) 60%, 
              hsl(25, 80%, 60%) 80%, 
              hsl(220, 70%, 50%) 100%
            )`,
            backgroundSize: '300% 100%',
            animation: 'gradient-flow 8s ease infinite'
          }}
        />
        
        {/* Shimmer waves overlay */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(255,255,255,0.4) 25%,
              transparent 50%,
              rgba(255,255,255,0.3) 75%,
              transparent 100%
            )`,
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0%', '-200% 0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating orbs for depth */}
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-primary/30 blur-3xl"
          animate={{
            x: ['-10%', '110%'],
            y: ['-20%', '20%', '-20%'],
          }}
          transition={{
            x: { duration: 12, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-blue-500/30 blur-3xl"
          animate={{
            x: ['110%', '-10%'],
            y: ['20%', '-20%', '20%'],
          }}
          transition={{
            x: { duration: 10, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-orange-400/40 blur-2xl"
          animate={{
            x: ['50%', '80%', '20%', '50%'],
            y: ['-10%', '30%', '50%', '-10%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Bottom Section - Tagline with Word Animation */}
      <div className="flex-1 flex flex-col justify-end pb-24 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-foreground leading-[1.1]">
            {/* Line 1 */}
            <span className="block">
              {line1Words.map((word, i) => (
                <motion.span
                  key={word + i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            {/* Line 2 + 3 */}
            <span className="block">
              {line2Words.map((word, i) => (
                <motion.span
                  key={word + i}
                  custom={i + line1Words.length}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
              {line3Words.map((word, i) => (
                <motion.span
                  key={word + i}
                  custom={i + line1Words.length + line2Words.length}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className={`inline-block mr-[0.3em] ${word === 'simplicity' ? 'text-primary' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group whitespace-nowrap"
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
        transition={{ duration: 0.6, delay: 1.8 }}
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
