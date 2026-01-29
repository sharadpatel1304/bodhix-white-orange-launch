import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, Suspense, lazy } from "react";
import laughingBuddha from "@/assets/laughing-buddha.png";

const ParticleVortex = lazy(() => import("./ParticleVortex"));

const About = () => {
  const values = ["clarity", "purpose", "results"];
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue((prev) => (prev + 1) % values.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="bg-background relative">
      {/* Hero Section with Buddha */}
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 border-b border-border relative overflow-hidden">
        {/* Buddha with Particle Vortex */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Suspense fallback={null}>
            <ParticleVortex />
          </Suspense>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10"
          >
            <motion.img
              src={laughingBuddha}
              alt="Laughing Buddha - Symbol of Awakening"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain opacity-15"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/10 blur-3xl -z-10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl relative z-20"
        >
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-8">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.1] mb-4">
            We believe in building with
          </h1>
          <div className="h-14 md:h-16 lg:h-20 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentValue}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-primary"
              >
                {values[currentValue]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Philosophy Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            <span className="text-primary text-sm font-medium">01</span>
            <h2 className="text-2xl md:text-3xl font-light text-foreground mt-2 mb-6">
              Our philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We don't build software for the sake of it. Every line of code serves a purpose. 
              Every feature solves a real problem.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The name "Bodhi" means awakening. Combined with "X" for transformation, 
              <span className="text-navy font-medium"> B<span className="text-primary">o</span>dhiX</span> represents 
              the clarity we bring to complex problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            <span className="text-primary text-sm font-medium">02</span>
            <h2 className="text-2xl md:text-3xl font-light text-foreground mt-2 mb-6">
              How we work
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We start by understanding your business. Not just the technical requirements, 
              but the actual problems you're trying to solve.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Then we build the simplest solution that works. No bloat. No unnecessary complexity. 
              Just software that does exactly what you need.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 lg:mt-32"
        >
          <h2 className="text-2xl md:text-3xl font-light text-foreground mb-12">
            What we stand for
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { title: "Simplicity", desc: "Strip away the unnecessary. Keep what matters.", number: "01" },
              { title: "Honesty", desc: "We tell you what you need, not what you want to hear.", number: "02" },
              { title: "Results", desc: "Software that works. On time. On budget.", number: "03" },
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background p-8 lg:p-12 group hover:bg-secondary/30 transition-colors"
              >
                <span className="text-primary/40 text-6xl font-light absolute -top-2 right-4 group-hover:text-primary/20 transition-colors">{value.number}</span>
                <h3 className="text-lg font-medium text-foreground mb-3 relative">{value.title}</h3>
                <p className="text-muted-foreground relative">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-light text-primary mb-2">{stat.number}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
