import { motion } from "framer-motion";
import { Code2, Workflow, BarChart3, Cloud, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software",
      description: "Built around your business. Not the other way around.",
      details: "We design and develop software that fits your exact workflow. No templates. No compromises.",
      features: ["Bespoke development", "API integrations", "Legacy modernization"],
      number: "01",
    },
    {
      icon: Workflow,
      title: "System Integration",
      description: "Connect your tools. Automate the boring stuff.",
      details: "Your existing software should work together seamlessly. We make that happen.",
      features: ["Workflow automation", "Data sync", "Third-party APIs"],
      number: "02",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Turn data into decisions.",
      details: "Real-time dashboards. Clear insights. No spreadsheet chaos.",
      features: ["Custom dashboards", "Real-time analytics", "Reporting tools"],
      number: "03",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Reliable. Scalable. Cost-effective.",
      details: "Modern cloud architecture that grows with your business.",
      features: ["AWS & Azure", "Auto-scaling", "24/7 monitoring"],
      number: "04",
    },
  ];

  return (
    <section id="services" className="bg-background relative">
      {/* Hero Section */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 border-b border-border relative overflow-hidden">
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
            Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
            What we do
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Four things. Done well. Each solution tailored to solve your specific challenges.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="space-y-px">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border p-8 lg:p-12 group hover:border-primary/30 transition-colors relative overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute -top-8 -right-4 text-[120px] font-light text-muted/20 group-hover:text-primary/10 transition-colors">
                {service.number}
              </span>
              
              <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                <div className="lg:col-span-2">
                  <service.icon 
                    className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" 
                    strokeWidth={1.5} 
                  />
                  <h3 className="text-2xl md:text-3xl font-light text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4">
                    {service.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.details}
                  </p>
                </div>
                
                <div className="lg:border-l lg:border-border lg:pl-8">
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    Includes
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={1.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="border border-border p-12 lg:p-16 relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary" />
            
            <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's discuss how we can help bring your vision to life with the right technology.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors group text-lg"
            >
              Let's talk
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
