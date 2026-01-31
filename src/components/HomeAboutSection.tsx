import { motion } from "framer-motion";

const HomeAboutSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Philosophy & How we work */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium">01</span>
            <h2 className="text-2xl md:text-3xl font-light text-foreground mt-2 mb-6">
              Our philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We don't build software for the sake of it. Every line of code serves a purpose. 
              Every feature solves a real problem.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The name "Bodhi" means awakening. Combined with "X" for transformation, 
              <span className="text-foreground font-medium"> B<span className="text-primary">o</span>dhiX</span> represents 
              the clarity we bring to complex problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-primary text-sm font-medium">02</span>
            <h2 className="text-2xl md:text-3xl font-light text-foreground mt-2 mb-6">
              How we work
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We start by understanding your business. Not just the technical requirements, 
              but the actual problems you're trying to solve.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Then we build the simplest solution that works. No bloat. No unnecessary complexity. 
              Just software that does exactly what you need.
            </p>
          </motion.div>
        </div>

        {/* What we stand for */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-light text-foreground mb-12">
            What we stand for
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Simplicity", desc: "Strip away the unnecessary. Keep what matters." },
              { title: "Honesty", desc: "We tell you what you need, not what you want to hear." },
              { title: "Results", desc: "Software that works. On time. On budget." },
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-border rounded-lg hover:border-primary/30 transition-colors bg-background"
              >
                <h3 className="text-lg font-medium text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
