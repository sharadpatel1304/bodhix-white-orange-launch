import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const projects = [
  { name: "FinTrack Pro", tags: ["SaaS", "Frontend", "Backend"], year: "2024" },
  { name: "MediConnect", tags: ["UX/UI Design", "Mobile App"], year: "2024" },
  { name: "RetailFlow", tags: ["E-Commerce", "API Integration"], year: "2023" },
  { name: "CloudSync", tags: ["Cloud Platform", "DevOps"], year: "2023" },
];

// The same premium deceleration curve used in the hero
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.4 + i * 0.12,
      ease,
    },
  }),
};

const HomeAboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Keeping scroll progress for the parallax on the cards and descriptions
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const descY = useTransform(scrollYProgress, [0.1, 0.4], [60, 0]);
  const cardsY = useTransform(scrollYProgress, [0.2, 0.6], [100, 0]);

  return (
    <section 
      ref={sectionRef} 
      // Stark white background with high-contrast text
      className="py-28 lg:py-40 bg-white text-zinc-950 relative overflow-hidden font-sans"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="mb-24 lg:mb-32">
          {/* Premium Typography: 
            font-normal, super tight leading (0.8), tight tracking (-0.04em) 
          */}
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-normal leading-[0.8] tracking-[-0.04em] uppercase text-[11vw] md:text-[9vw] lg:text-[7.5vw] select-none flex flex-col gap-0 mb-12"
          >
            {/* LINE 1 */}
            <div className="overflow-hidden py-1 lg:py-2">
              <motion.span
                custom={0}
                variants={textReveal}
                className="block origin-bottom-left will-change-transform"
              >
                ALL OUR PROJECTS
              </motion.span>
            </div>
            
            {/* LINE 2 */}
            <div className="overflow-hidden py-1 lg:py-2">
              <motion.span
                custom={1}
                variants={textReveal}
                // Using a subtle grey for the middle line to add depth
                className="block text-zinc-400 origin-bottom-left will-change-transform"
              >
                ARE DELIVERED WITH
              </motion.span>
            </div>

            {/* LINE 3 */}
            <div className="overflow-hidden py-1 lg:py-2 flex items-baseline">
              <motion.span
                custom={2}
                variants={textReveal}
                className="block origin-bottom-left will-change-transform"
              >
                QUALITY.
              </motion.span>
            </div>
          </motion.h2>

          <motion.div
            style={{ y: descY }}
            className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl will-change-transform"
          >
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={0}
              className="text-base md:text-lg text-zinc-500 font-medium leading-relaxed tracking-wide"
            >
              "Bodhi" means awakening. We bring that clarity to every project — understanding your business first, then building exactly what you need.
            </motion.p>
            <div className="flex flex-col items-start gap-8">
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={1}
                className="text-base md:text-lg text-zinc-500 font-medium leading-relaxed tracking-wide"
              >
                From startups to established businesses, we deliver software that works. On time. On budget. No unnecessary complexity, just results.
              </motion.p>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-950 hover:text-zinc-500 transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-zinc-950 hover:after:w-full after:transition-all after:duration-300 group"
                >
                  More about us
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Project cards with scroll parallax */}
        <motion.div style={{ y: cardsY }} className="will-change-transform">
          <div className="flex items-center justify-between mb-8 border-b border-zinc-200 pb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Recent Projects
            </p>
            <Link
              to="/projects"
              className="text-xs font-bold uppercase tracking-widest text-zinc-950 hover:text-zinc-500 transition-colors flex items-center gap-2 group"
            >
              View all <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease }}
                className="group cursor-pointer"
              >
                {/* Crisp, minimalist card image placeholder */}
                <div className="h-64 bg-zinc-100 group-hover:bg-zinc-200 transition-colors duration-500 flex items-center justify-center relative overflow-hidden mb-5 rounded-sm">
                  <span className="text-8xl font-normal text-zinc-950/[0.03] group-hover:text-zinc-950/[0.08] transition-colors duration-500 group-hover:scale-105 transform">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-zinc-950 tracking-tight">{project.name}</h3>
                    <span className="text-xs text-zinc-400 font-medium">{project.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 border border-zinc-200 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAboutSection;