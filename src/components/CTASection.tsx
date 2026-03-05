import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Custom solutions tailored to your needs",
  "Clear communication, zero jargon",
  "On-time delivery, every single time",
  "Ongoing support beyond launch",
];

const CTASection = () => {
  return (
    <section className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Full-width CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-border/60 relative overflow-hidden"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-l border-t border-primary/30" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-primary/30" />
          
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left side - Main CTA */}
            <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-primary/40" />
                <p className="text-primary text-[10px] font-mono uppercase tracking-[0.4em]">Get Started</p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-navy leading-tight mb-4">
                Let's build something<br />
                <span className="italic font-serif text-primary">together</span>.
              </h2>
              
              <p className="text-sm text-muted-foreground/60 max-w-md mb-8 leading-relaxed">
                Have an idea? We'd love to hear it. Let's talk about how we can turn your vision into reality.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <Link 
                  to="/contact" 
                  className="bg-navy text-white px-8 py-3.5 text-sm font-medium hover:bg-primary transition-all duration-500 shadow-lg shadow-navy/10 rounded-full inline-flex items-center gap-2 group"
                >
                  Start the dialogue
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/projects" 
                  className="text-muted-foreground hover:text-navy text-sm transition-colors"
                >
                  or view our work →
                </Link>
              </div>
            </div>

            {/* Right side - Benefits */}
            <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-border/60 p-8 lg:p-12 bg-muted/[0.15] flex flex-col justify-center">
              <p className="text-xs text-muted-foreground/50 uppercase tracking-[0.2em] mb-6 font-mono">
                Why BodhiX
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={benefit}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-sm text-muted-foreground/70">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;