import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
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
          className="max-w-2xl"
        >
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Begin The Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-foreground leading-tight mb-6">
            Ready to transcend the ordinary?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Every great system starts with a conversation. Tell us what keeps you up at night, 
            and we'll show you what's possible when constraints become catalysts.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group text-lg"
          >
            Start the dialogue
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
