import { motion } from "framer-motion";
import { Atom, Brain, Fingerprint, Infinity } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Cognitive Systems",
    description: "AI that doesn't just process—it understands. Neural architectures that learn from every interaction.",
  },
  {
    icon: Atom,
    title: "Atomic Precision",
    description: "Micro-optimizations that cascade into macro performance. Every millisecond is sacred.",
  },
  {
    icon: Fingerprint,
    title: "Zero-Trust Security",
    description: "Paranoid by design. We assume breach and architect accordingly.",
  },
  {
    icon: Infinity,
    title: "Infinite Scalability",
    description: "From prototype to planet-scale. Your growth is our constraint, not your infrastructure.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-32 bg-background relative">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">
            The Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground">
            Systems that breathe
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 border border-border hover:border-primary/30 transition-colors">
                <feature.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
