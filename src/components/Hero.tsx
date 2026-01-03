import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParticleVortex from "./ParticleVortex";
import laughingBuddha from "@/assets/laughing-buddha.png";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const buddhaY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-background relative overflow-hidden pt-16">
      {/* Grid Pattern Background with parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-[0.03]" 
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </motion.div>
      
      {/* Particle Vortex - positioned to the right */}
      <motion.div style={{ y: buddhaY, opacity }} className="absolute right-0 top-0 w-1/2 h-full">
        {/* Vortex behind the buddha */}
        <div className="absolute inset-0 z-0">
          <ParticleVortex />
        </div>
        
        {/* Laughing Buddha - brought to front with glowing aura and floating animation */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* Pulsing glow effect */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 60px 30px rgba(194, 102, 55, 0.3)",
                "0 0 100px 50px rgba(194, 102, 55, 0.5)",
                "0 0 60px 30px rgba(194, 102, 55, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full"
          />
          {/* Floating buddha image */}
          <motion.img 
            src={laughingBuddha}
            alt=""
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-contain opacity-95 drop-shadow-2xl"
          />
        </div>
      </motion.div>
      
      {/* Content - Left side with parallax */}
      <motion.div style={{ y: contentY, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-xl">
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
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-[1.1]"
          >
            BodhiX
          </motion.h1>
          
          {/* Subtext - Simple and straightforward */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md"
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
              className="inline-flex items-center gap-2 mt-8 text-sm text-foreground hover:text-primary transition-colors group"
            >
              View our transmutations
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

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
