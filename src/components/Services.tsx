import { motion } from "framer-motion";
import { Code2, Workflow, BarChart3, Cloud, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software",
      description: "Built around your business. Not the other way around.",
      features: ["Bespoke development", "API integrations", "Legacy modernization"],
      number: "01",
    },
    {
      icon: Workflow,
      title: "System Integration",
      description: "Connect your tools. Automate the boring stuff.",
      features: ["Workflow automation", "Data sync", "Third-party APIs"],
      number: "02",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Turn data into decisions.",
      features: ["Custom dashboards", "Real-time analytics", "Reporting tools"],
      number: "03",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Reliable. Scalable. Cost-effective.",
      features: ["AWS & Azure", "Auto-scaling", "24/7 monitoring"],
      number: "04",
    },
  ];

  return (
    <section id="services" className="bg-background relative">
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
              Services
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Four things. Done well. Each solution tailored to solve your specific challenges.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid - 2x2 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-border rounded-lg p-6 lg:p-8 group hover:border-primary/30 transition-colors relative overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute -top-4 -right-2 text-[80px] font-light text-muted/10 group-hover:text-primary/10 transition-colors">
                {service.number}
              </span>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <service.icon 
                    className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" 
                    strokeWidth={1.5} 
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-primary text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={1.5} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 border border-border rounded-lg p-8 text-center"
        >
          <h3 className="text-xl md:text-2xl font-light text-foreground mb-2">
            Have a project in mind?
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors group text-sm"
          >
            Let's talk
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
