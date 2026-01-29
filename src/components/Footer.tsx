import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="py-16 lg:py-24 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-normal tracking-wide text-navy mb-4">
              B<span className="text-primary">o</span>dhiX
            </h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              Custom software built around your business. Simple solutions for complex problems.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              Get in touch
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Contact
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>hello@bodhix.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BodhiX. All rights reserved.
          </p>
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
