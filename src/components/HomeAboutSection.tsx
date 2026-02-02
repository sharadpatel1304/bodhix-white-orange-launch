import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomeAboutSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">
            About Us
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            "Bodhi" means awakening. We bring that clarity to every project—understanding your 
            business first, then building exactly what you need. Nothing more.
          </p>
        </motion.div>

        {/* Two cards grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-border rounded-lg p-8 group hover:border-primary/30 transition-colors"
          >
            <p className="text-sm text-muted-foreground mb-6">Our Approach</p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-light text-primary mb-6">
              SIMPLE
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We don't build software for the sake of it. Every line of code serves a purpose. 
              Strip away the unnecessary, keep what matters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-border rounded-lg p-8 group hover:border-primary/30 transition-colors"
          >
            <p className="text-sm text-muted-foreground mb-6">Our Philosophy</p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-light text-primary mb-6">
              RESULTS
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Software that works. On time. On budget. We tell you what you need, 
              not what you want to hear.
            </p>
          </motion.div>
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            Learn more about us
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
