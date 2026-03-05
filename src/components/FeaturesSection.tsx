import { motion } from "framer-motion";
import { Brain, Atom, Fingerprint, Infinity, Zap, Globe } from "lucide-react";
import { useState } from "react";

const features = [
  { icon: Brain, title: "Smart Solutions", description: "Software that adapts and learns. Built with intelligence to grow alongside your business needs.", number: "01" },
  { icon: Atom, title: "Clean Code", description: "Well-crafted, maintainable systems. Easy to understand today, easy to extend tomorrow.", number: "02" },
  { icon: Fingerprint, title: "Secure by Default", description: "Your data stays protected with enterprise-grade security baked into every layer.", number: "03" },
  { icon: Infinity, title: "Scales with You", description: "Architecture that handles growth effortlessly — from MVP to millions of users.", number: "04" },
  { icon: Zap, title: "Fast Performance", description: "Optimized for speed. Sub-second load times and instant interactions.", number: "05" },
  { icon: Globe, title: "Works Everywhere", description: "Responsive across every device and platform. Your tools, accessible globally.", number: "06" },
];

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary/40" />
            <p className="text-primary text-[10px] font-mono uppercase tracking-[0.4em]">What We Offer</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-navy">
              Built for <span className="italic font-serif text-primary">results</span>
            </h2>
            <p className="text-sm text-muted-foreground/60 max-w-sm lg:text-right leading-relaxed">
              Every solution designed to solve real problems and deliver measurable outcomes.
            </p>
          </div>
        </motion.div>

        {/* Feature Grid - 2 rows of 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative border border-border/60 p-6 lg:p-8 transition-all duration-500 cursor-default overflow-hidden
                ${hoveredIndex === index ? 'border-primary/30 bg-primary/[0.02]' : 'hover:border-border'}
              `}
            >
              {/* Large background number */}
              <span className={`absolute -bottom-3 -right-1 text-[5rem] font-extralight leading-none transition-colors duration-500
                ${hoveredIndex === index ? 'text-primary/[0.08]' : 'text-muted/20'}
              `}>
                {feature.number}
              </span>

              {/* Icon with animated background */}
              <div className="relative mb-5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                  ${hoveredIndex === index ? 'bg-primary/10' : 'bg-muted/50'}
                `}>
                  <feature.icon 
                    className={`w-4 h-4 transition-colors duration-500 ${hoveredIndex === index ? 'text-primary' : 'text-muted-foreground'}`} 
                    strokeWidth={1.5} 
                  />
                </div>
              </div>

              <h3 className="text-sm font-medium text-foreground mb-2 relative z-10 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground/70 leading-relaxed relative z-10">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-700 ease-out
                ${hoveredIndex === index ? 'w-full' : 'w-0'}
              `} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;