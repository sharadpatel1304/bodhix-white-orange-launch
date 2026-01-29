import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Atom, Brain, Fingerprint, Infinity, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Solutions",
    description: "Software that adapts and learns. Built to grow with your business.",
    number: "01",
  },
  {
    icon: Atom,
    title: "Clean Code",
    description: "Well-crafted, maintainable systems. Easy to understand, easy to extend.",
    number: "02",
  },
  {
    icon: Fingerprint,
    title: "Secure by Default",
    description: "Your data stays protected. Security built in from day one.",
    number: "03",
  },
  {
    icon: Infinity,
    title: "Scales with You",
    description: "Start small, grow big. Our systems handle it all.",
    number: "04",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Quick load times, instant responses. No waiting around.",
    number: "05",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Access your tools from anywhere. Desktop, mobile, global.",
    number: "06",
  },
];

const FeaturesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={ref} className="py-32 lg:py-48 bg-background relative overflow-hidden">
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

      {/* Decorative accent line */}
      <div className="absolute left-0 top-1/4 w-24 h-px bg-gradient-to-r from-primary to-transparent" />
      <div className="absolute right-0 bottom-1/4 w-24 h-px bg-gradient-to-l from-primary to-transparent" />
      
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
              Built for results
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right">
            Every solution we build is designed to solve real problems and deliver measurable outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background relative overflow-hidden"
            >
              <div className="p-8 lg:p-10 h-full relative">
                {/* Large background number */}
                <span className="absolute -top-4 -right-2 text-7xl font-light text-muted/30 group-hover:text-primary/10 transition-colors">
                  {feature.number}
                </span>
                
                <feature.icon 
                  className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" 
                  strokeWidth={1.5} 
                />
                <h3 className="text-lg font-medium text-foreground mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                  {feature.description}
                </p>
                
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
