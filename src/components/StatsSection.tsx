import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LiveChart from "./LiveChart";
import LiveMetrics from "./LiveMetrics";

const StatsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Smooth parallax - visible but subtle
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["25px", "-25px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={ref} className="py-48 bg-secondary/30 relative overflow-hidden">
      {/* Grid Pattern with parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-[0.02]" 
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </motion.div>
      
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Performance
          </p>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground">
            Live metrics
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Real-time data from our systems. Always running, always reliable.
          </p>
        </motion.div>

        <LiveMetrics />
        
        <div className="mt-12">
          <LiveChart />
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
