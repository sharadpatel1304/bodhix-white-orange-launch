import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LiveChart from "./LiveChart";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "340%", label: "Average ROI" },
  { icon: Users, value: "2M+", label: "Users Served" },
  { icon: Clock, value: "99.9%", label: "Uptime" },
  { icon: Award, value: "50+", label: "Projects" },
];

const StatsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["25px", "-25px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={ref} className="py-32 lg:py-48 bg-secondary/30 relative overflow-hidden">
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

      {/* Decorative elements */}
      <div className="absolute top-12 right-12 w-32 h-32 border border-primary/10 rounded-full" />
      <div className="absolute bottom-12 left-12 w-16 h-16 border border-primary/10 rounded-full" />
      
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <stat.icon 
                className="w-6 h-6 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" 
                strokeWidth={1.5}
              />
              <p className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Performance
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
            Live metrics
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Real-time data from our systems. Always running, always reliable.
          </p>
        </motion.div>
        
        <LiveChart />
      </motion.div>
    </section>
  );
};

export default StatsSection;
