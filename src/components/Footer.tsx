import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bxLogo from "@/assets/bx-logo-new.png";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const wordmarkScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const links = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer ref={footerRef} className="bg-foreground border-t border-background/10">
      {/* Massive wordmark */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 lg:pt-28 overflow-hidden">
        <motion.h2
          style={{ scale: wordmarkScale, opacity: wordmarkOpacity }}
          className="text-[18vw] md:text-[14vw] lg:text-[12vw] font-bold text-background/[0.04] leading-none tracking-tighter uppercase select-none will-change-transform"
        >
          BodhiX
        </motion.h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={bxLogo} alt="BodhiX" className="h-10 w-auto brightness-0 invert mb-4" />
            <p className="text-sm text-background/40 max-w-sm mb-6 leading-relaxed">
              Custom software built around your business. Simple solutions for complex problems.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors group"
            >
              Get in touch
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-background/25 mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-background/25 mb-5">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-background/40">
              <li>hello@bodhix.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/25">
            © {new Date().getFullYear()} BodhiX. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-xs text-background/25 hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-background/25 hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
