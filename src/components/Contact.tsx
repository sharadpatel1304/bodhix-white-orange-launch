import { useState } from "react";
import { useToast } from "@/hooks/use-toast"; //
import { motion } from "framer-motion"; //
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"; //

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@bodhix.com", href: "mailto:hello@bodhix.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: null },
  { icon: Clock, label: "Response", value: "Within 24 hours", href: null },
]; //

const Contact = () => {
  const { toast } = useToast(); //
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  }); //
  const [isSubmitting, setIsSubmitting] = useState(false); //

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Pulling the URL from Vite's environment
      const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

      // This check prevents the "false success" if the .env isn't working
      if (!SCRIPT_URL || SCRIPT_URL === "undefined") {
        throw new Error("VITE_GOOGLE_SHEETS_URL is not defined. Check your .env file and restart the server.");
      }

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      toast({
        title: "Message sent",
        description: "We'll be in touch soon.",
      });
      setContactForm({ name: "", email: "", company: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Configuration Error",
        description: error.message || "Failed to connect to the backend.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background relative">
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

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-5 gap-6">
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
                  <label htmlFor="name" className="block text-xs text-muted-foreground mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-muted-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-xs text-muted-foreground mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  value={contactForm.company}
                  onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your company (optional)"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-muted-foreground mb-2">Message *</label>
                <textarea
                  id="message"
                  rows={3}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 rounded-full"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <ArrowRight size={14} />
              </motion.button>
            </form>
          </motion.div>

          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                <info.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="text-xs text-muted-foreground">{info.label}</p>
                  <p className="text-sm text-foreground">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;