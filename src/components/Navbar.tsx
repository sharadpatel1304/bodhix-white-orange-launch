import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import bxLogo from "@/assets/bx-logo-new.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setIsHeroVisible(false);
      return;
    }

    const handleScroll = () => {
      setIsHeroVisible(window.scrollY < window.innerHeight * 0.8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  // When over dark hero, use light text; otherwise use default
  const isDarkBg = isHome && isHeroVisible;

  return (
    <nav className={`fixed top-9 left-0 right-0 z-50 transition-colors duration-500 ${
      isDarkBg ? 'bg-transparent' : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={bxLogo} alt="BodhiX" className={`h-10 w-auto transition-all duration-500 ${isDarkBg ? 'brightness-0 invert' : ''}`} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-normal transition-colors ${
                  isDarkBg
                    ? 'text-background/60 hover:text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`relative p-2 transition-colors ${
                isDarkBg ? 'text-background/60 hover:text-background' : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute top-2 left-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`relative p-2 transition-colors ${
                isDarkBg ? 'text-background/60 hover:text-background' : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute top-2 left-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isDarkBg ? 'text-background' : 'text-foreground'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden border-t py-4 ${isDarkBg ? 'border-background/10' : 'border-border'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-sm font-normal transition-colors ${
                  isDarkBg
                    ? 'text-background/60 hover:text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
