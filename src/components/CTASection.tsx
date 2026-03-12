import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone } from "lucide-react";

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

const CTASection = () => {
  return (
    <section className="py-28 lg:py-40 bg-white text-zinc-950 relative overflow-hidden font-sans">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="border-t border-zinc-200 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-end">
            
            {/* Left: Huge Monumental Text */}
            <div className="lg:col-span-7">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="font-normal leading-[0.8] tracking-[-0.04em] uppercase text-[12vw] md:text-[10vw] lg:text-[8vw] select-none flex flex-col gap-0"
              >
                {/* LINE 1 */}
                <div className="overflow-hidden py-1 lg:py-2">
                  <motion.span
                    custom={0}
                    variants={textReveal}
                    className="block origin-bottom-left will-change-transform"
                  >
                    LET'S BUILD
                  </motion.span>
                </div>
                
                {/* LINE 2 */}
                <div className="overflow-hidden py-1 lg:py-2">
                  <motion.span
                    custom={1}
                    variants={textReveal}
                    className="block text-zinc-400 origin-bottom-left will-change-transform"
                  >
                    THE FUTURE
                  </motion.span>
                </div>

                {/* LINE 3 */}
                <div className="overflow-hidden py-1 lg:py-2">
                  <motion.span
                    custom={2}
                    variants={textReveal}
                    className="block origin-bottom-left will-change-transform"
                  >
                    TOGETHER.
                  </motion.span>
                </div>
              </motion.h2>
            </div>

            {/* Right: Actions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-5 flex flex-col items-start lg:pl-12"
            >
              <motion.p 
                variants={fadeUp} custom={0}
                className="text-base md:text-lg text-zinc-500 font-medium leading-relaxed max-w-md mb-10 tracking-wide"
              >
                Have an architecture concept or a legacy system bottleneck? We engineer platforms that scale. Let's discuss operational leverage.
              </motion.p>

              <motion.div variants={fadeUp} custom={1} className="w-full">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-between w-full sm:w-auto gap-12 bg-zinc-950 text-white px-8 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 hover:scale-[1.02] transition-all duration-300 group mb-12"
                >
                  Discuss the Project
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>

              {/* Contact Links */}
              <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-8 lg:gap-12 pt-8 border-t border-zinc-200 w-full">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email</span>
                  <a
                    href="mailto:hello@bodhix.com"
                    className="text-sm font-bold text-zinc-950 hover:text-zinc-500 transition-colors flex items-center gap-2 group"
                  >
                    <Mail size={16} className="text-zinc-400 group-hover:text-zinc-500 transition-colors" />
                    hello@bodhix.com
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Direct Line</span>
                  <a
                    href="tel:+15551234567"
                    className="text-sm font-bold text-zinc-950 hover:text-zinc-500 transition-colors flex items-center gap-2 group"
                  >
                    <Phone size={16} className="text-zinc-400 group-hover:text-zinc-500 transition-colors" />
                    +1 (555) 123-4567
                  </a>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;