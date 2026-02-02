import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@bodhix.com", href: "mailto:hello@bodhix.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: null },
  { icon: Clock, label: "Response", value: "Within 24 hours", href: null },
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
      {/* Compact Hero */}
      <div className="py-16 lg:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Contact
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Tell us about your project. We'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact Form - wider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 border border-border rounded-lg p-6 lg:p-8"
          >
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs text-muted-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-muted-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                    maxLength={255}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-xs text-muted-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={contactForm.company}
                  onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your company (optional)"
                  maxLength={100}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-muted-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  maxLength={1000}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 group rounded-full"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info - narrower */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/30 transition-colors group"
              >
                <info.icon className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <div>
                  <p className="text-xs text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-sm text-foreground hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* FAQ Preview */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-sm font-medium text-foreground mb-3">Common Questions</h3>
              <ul className="space-y-3 text-xs">
                <li>
                  <p className="text-foreground mb-0.5">How long does a typical project take?</p>
                  <p className="text-muted-foreground">4-12 weeks depending on scope.</p>
                </li>
                <li>
                  <p className="text-foreground mb-0.5">What's your pricing model?</p>
                  <p className="text-muted-foreground">Fixed-price after discovery.</p>
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
