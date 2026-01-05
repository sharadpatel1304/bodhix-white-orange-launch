import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Atom, Brain, Fingerprint, Infinity, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Solutions",
    description: "Software that adapts and learns. Built to grow with your business.",
  },
  {
    icon: Atom,
    title: "Clean Code",
    description: "Well-crafted, maintainable systems. Easy to understand, easy to extend.",
  },
  {
    icon: Fingerprint,
    title: "Secure by Default",
    description: "Your data stays protected. Security built in from day one.",
  },
  {
    icon: Infinity,
    title: "Scales with You",
    description: "Start small, grow big. Our systems handle it all.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Quick load times, instant responses. No waiting around.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Access your tools from anywhere. Desktop, mobile, global.",
  },
];

const FeaturesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Smooth parallax - visible but subtle
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={ref} className="py-48 bg-background relative overflow-hidden">
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
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground">
            Built for results
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 border border-border hover:border-primary/30 transition-colors h-full">
                <feature.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
