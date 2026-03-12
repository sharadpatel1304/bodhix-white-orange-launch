import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const textReveal = {
  hidden: { y: "120%", opacity: 0, rotate: 1 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      delay: 0.1 + i * 0.15,
      ease: [0.19, 1.0, 0.22, 1.0],
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
      delay: 0.6 + i * 0.12,
      ease: [0.19, 1.0, 0.22, 1.0],
    },
  }),
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const line1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const line2Y = useTransform(scrollYProgress, [0, 1], [0, -180]);

  const bottomOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const bottomY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-between bg-[#121110] relative overflow-hidden font-sans"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      {/* Changed items-center to a custom flex layout with a negative margin to push it up visually */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-12 pt-20 relative z-10 -mt-12 lg:-mt-24">
        <div className="w-full max-w-[1600px] mx-auto">
          
          {/* font-normal: Removes the heavy bold look 
            leading-[0.8]: Makes the lines sit almost on top of each other
            tracking-[-0.04em]: Squeezes the letters closer together
          */}
          <h1 className="font-normal leading-[0.8] tracking-[-0.04em] uppercase select-none flex flex-col gap-0 text-[11.5vw] md:text-[9.5vw] lg:text-[8.5vw]">
            
            {/* LINE 1 */}
            <div className="overflow-hidden py-1 md:py-2 flex flex-wrap items-end gap-x-3 md:gap-x-5">
              <motion.span
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textReveal}
                style={{ y: line1Y }}
                className="block text-[#F4F0EA] will-change-transform origin-bottom-left whitespace-nowrap"
              >
                SAAS &
              </motion.span>
              <motion.span
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textReveal}
                style={{ y: line1Y }}
                className="block text-[#F8D5C4] will-change-transform origin-bottom-left whitespace-nowrap"
              >
                CUSTOM APPS.
              </motion.span>
            </div>

            {/* LINE 2 */}
            <div className="overflow-hidden py-1 md:py-2">
              <motion.span
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textReveal}
                style={{ y: line2Y }}
                className="block text-[#F4F0EA] will-change-transform origin-bottom-left"
              >
                WEB SOLUTIONS.
              </motion.span>
            </div>
            
          </h1>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        style={{ opacity: bottomOpacity, y: bottomY }}
        className="px-6 lg:px-12 pb-10 lg:pb-16 relative z-10 will-change-transform"
      >
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base md:text-lg text-[#F4F0EA]/60 font-medium max-w-xl leading-relaxed tracking-wide"
          >
            We develop custom software, modern SaaS platforms, and seamless applications — delivering robust web solutions from enterprise ERPs to dedicated platforms like kupaaniru.
          </motion.p>

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-8"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 bg-[#F8D5C4] text-[#121110] px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#F4F0EA] hover:scale-105 transition-all duration-300 group"
            >
              View Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="text-[#F4F0EA]/60 hover:text-[#F8D5C4] text-sm font-bold uppercase tracking-widest transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#F8D5C4] hover:after:w-full after:transition-all after:duration-300"
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;