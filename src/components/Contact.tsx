import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@bodhix.com", href: "mailto:hello@bodhix.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: null },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
];

const Contact = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent",
      description: "We'll be in touch soon.",
    });
    setContactForm({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-background relative">
      {/* Hero Section */}
      <div className="min-h-[50vh] flex flex-col items-center justify-center px-6 border-b border-border relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-12 w-24 h-px bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute bottom-1/4 right-12 w-24 h-px bg-gradient-to-l from-primary to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl"
        >
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-8">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
            Let's talk
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Tell us about your project. We'll get back to you within 24 hours.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-8">
              Send us a message
            </h2>
            <form onSubmit={handleContactSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground text-lg placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground text-lg placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                    maxLength={255}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-muted-foreground mb-3">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={contactForm.company}
                  onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground text-lg placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your company (optional)"
                  maxLength={100}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground text-lg placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  maxLength={1000}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-8">
              Get in touch
            </h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 border border-border hover:border-primary/30 transition-colors group"
                >
                  <info.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Preview */}
            <div className="border border-border p-8 relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary" />
              
              <h3 className="text-lg font-medium text-foreground mb-4">Common Questions</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <p className="text-foreground text-sm mb-1">How long does a typical project take?</p>
                  <p className="text-sm">Most projects range from 4-12 weeks depending on scope.</p>
                </li>
                <li>
                  <p className="text-foreground text-sm mb-1">What's your pricing model?</p>
                  <p className="text-sm">We work on fixed-price contracts after a discovery phase.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
