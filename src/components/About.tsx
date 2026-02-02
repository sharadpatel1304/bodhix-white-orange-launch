import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, Suspense, lazy } from "react";
import laughingBuddha from "@/assets/laughing-buddha.png";

const ParticleVortex = lazy(() => import("./ParticleVortex"));

const About = () => {
  const words = ["clarity", "purpose", "results"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="bg-background relative">
      {/* Hero with Buddha */}
      <div className="py-12 lg:py-16 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                About Us
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-2">
                We believe in building with{" "}
                <span className="inline-block w-20">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-primary font-medium"
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The name "Bodhi" means awakening. Combined with "X" for transformation,{" "}
                <span className="text-foreground font-medium">B<span className="text-primary">o</span>dhiX</span> represents 
                the clarity we bring to complex problems.
              </p>
            </motion.div>

            {/* Buddha with Vortex */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <Suspense fallback={null}>
                <div className="w-48 h-48 lg:w-56 lg:h-56">
                  <ParticleVortex />
                </div>
              </Suspense>
              <motion.img
                src={laughingBuddha}
                alt="Laughing Buddha"
                className="w-32 h-32 lg:w-40 lg:h-40 object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-border rounded-lg p-8"
          >
            <p className="text-sm text-muted-foreground mb-4">Our Philosophy</p>
            <p className="text-5xl md:text-6xl font-light text-primary mb-4">01</p>
            <p className="text-muted-foreground leading-relaxed">
              We don't build software for the sake of it. Every line of code serves a purpose. 
              Every feature solves a real problem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-border rounded-lg p-8"
          >
            <p className="text-sm text-muted-foreground mb-4">How We Work</p>
            <p className="text-5xl md:text-6xl font-light text-primary mb-4">02</p>
            <p className="text-muted-foreground leading-relaxed">
              We start by understanding your business. Not just technical requirements, 
              but the actual problems you're trying to solve.
            </p>
          </motion.div>
        </div>

        {/* Values - inline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-4 grid grid-cols-3 gap-4"
        >
          {[
            { title: "Simplicity", desc: "Strip away the unnecessary." },
            { title: "Honesty", desc: "We tell you what you need." },
            { title: "Results", desc: "Software that works." },
          ].map((value) => (
            <div 
              key={value.title}
              className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-foreground font-medium mb-1">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
