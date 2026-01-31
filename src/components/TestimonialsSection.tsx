import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, Sparkles, Heart, Zap, Coffee, Rocket } from "lucide-react";

const testimonials = [
  {
    quote: "They didn't just build software—they understood our business. That's rare.",
    author: "Sarah Chen",
    role: "Founder, TechFlow",
    icon: Sparkles
  },
  {
    quote: "Finally, developers who speak human. No jargon, just solutions.",
    author: "Marcus Rivera",
    role: "CEO, GreenLeaf Labs",
    icon: Heart
  },
  {
    quote: "On time, on budget, and exactly what we needed. Will work with them again.",
    author: "Emily Watson",
    role: "CTO, DataSync",
    icon: Zap
  }
];

const funFacts = [
  { icon: Coffee, value: "2,847", label: "Cups of coffee consumed" },
  { icon: Rocket, value: "∞", label: "Ideas explored" },
  { icon: Heart, value: "100%", label: "Passion invested" },
  { icon: Sparkles, value: "0", label: "Boring projects accepted" },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-32 lg:py-48 bg-secondary/30 relative overflow-hidden">
      {/* Grid Pattern with parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-[0.02]" 
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-12 right-12 w-32 h-32 border border-primary/10 rounded-full" />
      <div className="absolute bottom-12 left-12 w-16 h-16 border border-primary/10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Fun Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {funFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <fact.icon 
                  className="w-6 h-6 text-primary mx-auto mb-4 group-hover:text-primary/80 transition-colors" 
                  strokeWidth={1.5}
                />
              </motion.div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-2">
                {fact.value}
              </p>
              <p className="text-sm text-muted-foreground">{fact.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">
            What people say
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
            Kind words
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`
                  bg-background border border-border rounded-2xl p-8 relative
                  transition-all duration-500
                  ${activeIndex === index ? 'scale-[1.02] border-primary/30 shadow-lg' : 'hover:border-primary/20'}
                `}
              >
                <Quote className="w-8 h-8 text-primary/20 mb-6" />
                <p className="text-foreground text-lg leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <testimonial.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">{testimonial.author}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index ? 'bg-primary w-6' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
