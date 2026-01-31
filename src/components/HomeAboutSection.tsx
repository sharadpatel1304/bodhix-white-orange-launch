import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomeAboutSection = () => {
  const values = [
    { number: "01", title: "Simplicity", desc: "Strip away the unnecessary." },
    { number: "02", title: "Honesty", desc: "We tell you what you need." },
    { number: "03", title: "Results", desc: "Software that works." },
  ];

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[20vw] font-light text-foreground/[0.02] tracking-tight">
          BodhiX
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Top section - single statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-6">
            Who we are
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-6">
            We build software that makes sense.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            "Bodhi" means awakening. We bring that clarity to every project—understanding your 
            business first, then building exactly what you need. Nothing more.
          </p>
        </motion.div>

        {/* Horizontal values strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-b border-border py-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <span className="text-primary/30 text-sm font-medium group-hover:text-primary transition-colors">
                  {value.number}
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-foreground font-medium">{value.title}</span>
                  <span className="text-muted-foreground text-sm hidden sm:inline">
                    {value.desc}
                  </span>
                </div>
                {i < values.length - 1 && (
                  <div className="hidden md:block w-px h-6 bg-border ml-auto" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Link to About */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
