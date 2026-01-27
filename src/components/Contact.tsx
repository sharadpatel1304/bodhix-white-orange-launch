import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
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
    setContactForm({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-background relative">
      {/* Hero Section */}
      <div className="min-h-[50vh] flex flex-col items-center justify-center px-6 border-b border-border">
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
          <p className="mt-6 text-lg text-muted-foreground">
            Tell us about your project. We'll get back to you within 24 hours.
          </p>
        </motion.div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleContactSubmit}
          className="space-y-8"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-muted-foreground mb-3">
              Name
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
              Email
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

          <div>
            <label htmlFor="message" className="block text-sm text-muted-foreground mb-3">
              Message
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
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-16 border-t border-border text-center"
        >
          <p className="text-muted-foreground mb-4">Or reach us directly</p>
          <a 
            href="mailto:hello@bodhix.com" 
            className="text-foreground hover:text-primary transition-colors text-lg"
          >
            hello@bodhix.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
