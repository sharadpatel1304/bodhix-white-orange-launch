import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  { title: "Website Development", description: "Custom-built websites and web applications using modern frameworks. Responsive, fast, and optimized for growth.", number: "01" },
  { title: "SaaS Platforms", description: "End-to-end SaaS development — from MVP to scale. Multi-tenant architecture, billing, dashboards, and APIs.", number: "02" },
  { title: "Mobile Applications", description: "Cross-platform mobile apps that feel native. Built with performance and user experience at the core.", number: "03" },
  { title: "UI/UX Design", description: "Research-driven design that converts. Clean interfaces, intuitive flows, and pixel-perfect execution.", number: "04" },
  { title: "Cloud & DevOps", description: "Scalable infrastructure, CI/CD pipelines, and cloud architecture that grows with your business.", number: "05" },
  { title: "AI Integration", description: "Intelligent features powered by AI — from chatbots to data analysis, seamlessly integrated into your product.", number: "06" },
];

const ease = [0.19, 1.0, 0.22, 1.0];

const textReveal = {
  hidden: { y: "120%", opacity: 0, rotate: 1 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      delay: i * 0.15,
      ease,
    },
  }),
};

const FeaturesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default to first item open
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <section 
      ref={sectionRef} 
      className="py-28 lg:py-40 bg-white text-zinc-950 relative overflow-hidden font-sans"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Monumental Header */}
        <motion.div
          style={{ y: headerY }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20 lg:mb-32 will-change-transform"
        >
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-normal leading-[0.8] tracking-[-0.04em] uppercase text-[11vw] md:text-[9vw] lg:text-[7.5vw] select-none flex flex-col gap-0"
          >
            <div className="overflow-hidden py-1 lg:py-2">
              <motion.span custom={0} variants={textReveal} className="block origin-bottom-left will-change-transform">
                WHAT
              </motion.span>
            </div>
            <div className="overflow-hidden py-1 lg:py-2">
              <motion.span custom={1} variants={textReveal} className="block text-zinc-400 origin-bottom-left will-change-transform">
                WE DO.
              </motion.span>
            </div>
          </motion.h2>

          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-zinc-950 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors duration-300 group shrink-0 mb-4 lg:mb-0"
          >
            All Services
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Premium Accordion List */}
        <div className="border-t border-zinc-200">
          {services.map((service, index) => {
            const isOpen = expandedIndex === index;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease }}
                className="border-b border-zinc-200 group"
              >
                <button
                  onClick={() => setExpandedIndex(isOpen ? null : index)}
                  className="w-full py-8 lg:py-12 flex items-center justify-between text-left cursor-pointer transition-colors duration-500 hover:bg-zinc-50 px-4 -mx-4 rounded-lg"
                >
                  <div className="flex items-center gap-8 lg:gap-16">
                    <span className="text-sm font-bold text-zinc-300 group-hover:text-zinc-950 transition-colors tracking-widest w-8 shrink-0">
                      {service.number}
                    </span>
                    
                    <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-500 origin-left ${
                      isOpen ? "text-zinc-950 scale-100" : "text-zinc-400 group-hover:text-zinc-950 scale-[0.98]"
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  {/* High-end Animated Plus/Minus Icon */}
                  <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                    <div className={`absolute w-full h-[2px] bg-zinc-950 transition-transform duration-500 ease-[0.19,1.0,0.22,1.0] ${isOpen ? "rotate-180" : "rotate-0"}`} />
                    <div className={`absolute w-full h-[2px] bg-zinc-950 transition-transform duration-500 ease-[0.19,1.0,0.22,1.0] ${isOpen ? "rotate-180 opacity-0" : "rotate-90 opacity-100"}`} />
                  </div>
                </button>

                {/* Accordion Content Reveal */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 md:pl-[6.5rem] lg:pl-[8.5rem] pb-12 max-w-3xl">
                        <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed mb-8">
                          {service.description}
                        </p>
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-950 hover:text-zinc-500 transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-zinc-950 hover:after:w-full after:transition-all after:duration-300 group"
                        >
                          View Details
                          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;