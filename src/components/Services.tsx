import { motion } from "framer-motion";
import { Code2, Workflow, BarChart3, Cloud, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Code2,
      title: "Custom Software",
      description: "Built around your business. Not the other way around.",
      features: ["Bespoke development", "API integrations", "Legacy modernization"],
      number: "01",
      fullDescription: "Custom software development tailored specifically to your unique business requirements. We build solutions from the ground up, ensuring every feature serves your operational needs.",
      benefits: [
        "Perfectly aligned with your business processes",
        "Scalable architecture that grows with you",
        "Full ownership and control of your codebase",
        "Reduced operational costs through automation",
        "Competitive advantage through unique capabilities"
      ],
      useCases: "Ideal for businesses with unique workflows, complex integrations, or those looking to replace outdated legacy systems with modern, efficient solutions."
    },
    {
      icon: Workflow,
      title: "System Integration",
      description: "Connect your tools. Automate the boring stuff.",
      features: ["Workflow automation", "Data sync", "Third-party APIs"],
      number: "02",
      fullDescription: "Seamlessly connect your existing tools and systems to create a unified, automated workflow. We eliminate manual data entry and ensure your systems communicate effortlessly.",
      benefits: [
        "Eliminate repetitive manual tasks",
        "Real-time data synchronization across platforms",
        "Reduced human error and improved accuracy",
        "Faster decision-making with unified data",
        "Improved team productivity and collaboration"
      ],
      useCases: "Perfect for organizations using multiple SaaS tools, CRMs, ERPs, or any business looking to streamline operations and reduce manual work."
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Turn data into decisions.",
      features: ["Custom dashboards", "Real-time analytics", "Reporting tools"],
      number: "03",
      fullDescription: "Transform raw data into actionable insights with custom analytics solutions. We build intuitive dashboards and reporting tools that help you make informed decisions quickly.",
      benefits: [
        "Clear visibility into business performance",
        "Identify trends and opportunities early",
        "Data-driven decision making",
        "Automated reporting saves hours weekly",
        "Custom KPIs tailored to your goals"
      ],
      useCases: "Essential for data-rich organizations, marketing teams tracking campaigns, sales teams monitoring pipelines, or executives needing real-time business intelligence."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Reliable. Scalable. Cost-effective.",
      features: ["AWS & Azure", "Auto-scaling", "24/7 monitoring"],
      number: "04",
      fullDescription: "Modern cloud infrastructure designed for reliability and performance. We architect, deploy, and manage cloud solutions that scale automatically with your needs while optimizing costs.",
      benefits: [
        "99.9%+ uptime with redundant architecture",
        "Pay only for what you use with auto-scaling",
        "Enhanced security and compliance",
        "Disaster recovery and backup solutions",
        "Global reach with edge deployment options"
      ],
      useCases: "Critical for growing businesses, applications with variable traffic, companies requiring high availability, or those migrating from on-premise infrastructure."
    },
  ];

  return (
    <section id="services" className="bg-background relative">
      {/* Compact Hero */}
      <div className="py-12 lg:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-2">
              Services
            </h1>
            <p className="text-muted-foreground">
              Four things. Done well. Click to learn more.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedService(index)}
              className="border border-border rounded-lg p-6 group hover:border-primary/30 transition-colors relative overflow-hidden cursor-pointer"
            >
              <span className="absolute -top-4 -right-2 text-[80px] font-light text-muted/10 group-hover:text-primary/10 transition-colors">
                {service.number}
              </span>
              
              <div className="relative z-10">
                <service.icon 
                  className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform" 
                  strokeWidth={1.5} 
                />
                <h3 className="text-xl font-light text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-primary text-sm mb-3">
                  {service.description}
                </p>
                <ul className="space-y-1.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" strokeWidth={1.5} />
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm"
          >
            Let's talk
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Service Detail Dialog */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedService !== null && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  {(() => {
                    const Icon = services[selectedService].icon;
                    return <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />;
                  })()}
                  <DialogTitle className="text-2xl font-light">
                    {services[selectedService].title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-base text-foreground/80">
                  {services[selectedService].fullDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">How it benefits you</h4>
                  <ul className="space-y-2">
                    {services[selectedService].benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div className="border-t border-border pt-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Ideal for</h4>
                  <p className="text-sm text-muted-foreground">
                    {services[selectedService].useCases}
                  </p>
                </div>

                {/* CTA */}
                <div className="border-t border-border pt-4">
                  <Link 
                    to="/contact" 
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors text-sm"
                  >
                    Get started with {services[selectedService].title}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
