import { motion } from "framer-motion";
import { Brain, Atom, Fingerprint, Infinity, Zap, Globe } from "lucide-react";

const features = [
  { icon: Brain, title: "Smart Solutions", description: "Software that adapts and grows with your business.", number: "01" },
  { icon: Atom, title: "Clean Code", description: "Maintainable systems. Easy to understand, easy to extend.", number: "02" },
  { icon: Fingerprint, title: "Secure by Default", description: "Your data stays protected. Security built in from day one.", number: "03" },
  { icon: Infinity, title: "Scales with You", description: "Start small, grow big. Our systems handle it all.", number: "04" },
  { icon: Zap, title: "Fast Performance", description: "Quick load times, instant responses. No waiting.", number: "05" },
  { icon: Globe, title: "Works Everywhere", description: "Desktop, mobile, global. Access from anywhere.", number: "06" },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-primary text-[10px] font-mono uppercase tracking-[0.4em] mb-3">What We Offer</p>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground">
              Built for results
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm md:text-right">
            Every solution designed to solve real problems and deliver measurable outcomes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 border border-border/50">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-background p-6 lg:p-7 relative overflow-hidden hover:bg-muted/30 transition-colors"
            >
              <span className="absolute top-3 right-4 text-xs text-muted-foreground/20 font-mono">
                {feature.number}
              </span>
              <feature.icon className="w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-sm font-medium text-foreground mb-1.5">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
