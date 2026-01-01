import { motion } from "framer-motion";
import { Code2, Workflow, BarChart3, Cloud, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Platform Development",
      description: "Custom SaaS platforms built for scale, security, and seamless user experience. From MVP to enterprise-grade solutions.",
      features: ["Custom Architecture", "Scalable Infrastructure", "API Development"],
    },
    {
      icon: Workflow,
      title: "System Integration",
      description: "Connect your existing tools and workflows into a unified, efficient ecosystem. Eliminate silos and boost productivity.",
      features: ["API Integration", "Workflow Automation", "Legacy Modernization"],
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that drive strategic decisions. Real-time dashboards and predictive analytics.",
      features: ["Business Intelligence", "Predictive Models", "Custom Dashboards"],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Modern cloud architecture designed for reliability, performance, and cost efficiency. AWS, GCP, and Azure expertise.",
      features: ["Cloud Migration", "DevOps", "Cost Optimization"],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
            Services
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border border-border p-8 lg:p-10 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <service.icon className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <span className="text-primary text-sm font-medium mr-3">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-medium text-foreground inline">{service.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {service.features.map((feature) => (
                  <span key={feature} className="text-xs text-muted-foreground border border-border px-3 py-1">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
          >
            Discuss your project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;