import { motion } from "framer-motion";
import { Code2, Workflow, BarChart3, Cloud, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software",
      description: "Built around your business. Not the other way around.",
      details: "We design and develop software that fits your exact workflow. No templates. No compromises.",
    },
    {
      icon: Workflow,
      title: "System Integration",
      description: "Connect your tools. Automate the boring stuff.",
      details: "Your existing software should work together seamlessly. We make that happen.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Turn data into decisions.",
      details: "Real-time dashboards. Clear insights. No spreadsheet chaos.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Reliable. Scalable. Cost-effective.",
      details: "Modern cloud architecture that grows with your business.",
    },
  ];

  return (
    <section id="services" className="bg-background relative">
      {/* Hero Section */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 border-b border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl"
        >
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-8">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
            What we do
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Four things. Done well.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 lg:p-12 group"
            >
              <service.icon 
                className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" 
                strokeWidth={1.5} 
              />
              <h3 className="text-xl md:text-2xl font-light text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-primary font-medium text-sm mb-4">
                {service.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {service.details}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Have a project in mind?
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group text-lg"
          >
            Let's talk
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
