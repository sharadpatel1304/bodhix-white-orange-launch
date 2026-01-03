import { motion } from "framer-motion";
import LiveChart from "./LiveChart";
import LiveMetrics from "./LiveMetrics";

const StatsSection = () => {
  return (
    <section className="py-40 bg-secondary/30 relative">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
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
      </div>
    </section>
  );
};

export default StatsSection;
