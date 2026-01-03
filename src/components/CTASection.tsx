import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const leftContentY = useTransform(scrollYProgress, [0, 1], ["60px", "-30px"]);
  const rightContentY = useTransform(scrollYProgress, [0, 1], ["80px", "-20px"]);

  return (
    <section ref={ref} className="py-56 bg-background relative overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y: leftContentY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-tight mb-6">
              Let's build something together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have an idea? We'd love to hear it. Let's talk about how we can help.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group text-lg"
            >
              Start the dialogue
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            style={{ y: rightContentY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="border border-border p-8 lg:p-12">
              <Sparkles className="w-12 h-12 text-primary mb-6" strokeWidth={1} />
              <h3 className="text-2xl font-normal text-foreground mb-4">
                Why BodhiX
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <span>Custom solutions, not one-size-fits-all</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <span>Clear communication, no jargon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <span>On-time delivery, every time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <span>Support that lasts beyond launch</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
