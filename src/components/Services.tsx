import { motion } from "framer-motion";
import { Code2, Workflow, BarChart3, Cloud, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const ease = [0.19, 1.0, 0.22, 1.0];

const textReveal = {
  hidden: { y: "120%", opacity: 0, rotate: 1 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      delay: i * 0.15,
      ease,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.2 + i * 0.12,
      ease,
    },
  }),
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Code2,
      title: "Custom Software",
      description: "Bespoke development tailored strictly to your operational logic. We build resilient codebases from the ground up.",
      features: ["Enterprise Architecture", "API Integration", "Legacy Modernization"],
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
      description: "Seamless synchronization across your entire tech stack. We eliminate silos and automate complex data workflows.",
      features: ["Process Automation", "Real-time Sync", "Third-party APIs"],
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
      description: "Transforming raw metrics into strategic leverage. Intuitive dashboards engineered for rapid, data-driven decisions.",
      features: ["Custom Dashboards", "Predictive Modeling", "Automated Reporting"],
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
      description: "High-availability architecture built for scale. Secure, redundant, and cost-optimized deployments.",
      features: ["AWS & Azure", "Auto-scaling Networks", "Zero-downtime Ops"],
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
    <section id="services" className="bg-white text-zinc-950 relative py-28 lg:py-40 font-sans">
      
      {/* Header Section */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-20 lg:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          
          {/* Monumental Title */}
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-normal leading-[0.8] tracking-[-0.04em] uppercase text-[11vw] md:text-[9vw] lg:text-[7.5vw] select-none flex flex-col gap-0"
          >
            <div className="overflow-hidden py-1 lg:py-2">
              <motion.span custom={0} variants={textReveal} className="block origin-bottom-left will-change-transform">
                OUR CORE
              </motion.span>
            </div>
            <div className="overflow-hidden py-1 lg:py-2">
              <motion.span custom={1} variants={textReveal} className="block text-zinc-400 origin-bottom-left will-change-transform">
                SERVICES.
              </motion.span>
            </div>
          </motion.h2>

          {/* Subtext */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={2}
            className="max-w-sm pb-2"
          >
            <p className="text-base md:text-lg text-zinc-500 font-medium leading-relaxed tracking-wide">
              Engineering high-performance digital solutions across four distinct disciplines.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid - Brutalist List Style */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="border-t border-zinc-200">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease }}
              onClick={() => setSelectedService(index)}
              className="group cursor-pointer border-b border-zinc-200 py-8 lg:py-12 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 hover:bg-zinc-50 transition-colors duration-500 relative"
            >
              
              {/* Number & Icon */}
              <div className="flex items-center gap-6 lg:w-1/4 shrink-0">
                <span className="text-sm font-bold text-zinc-300 group-hover:text-zinc-950 transition-colors tracking-widest">
                  {service.number}
                </span>
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-5 h-5 text-zinc-950" strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-zinc-950 mb-3 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-base text-zinc-500 font-medium leading-relaxed group-hover:translate-x-2 transition-transform duration-500 delay-75">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-3 lg:pr-12">
                  {service.features.map((feature) => (
                    <span key={feature} className="text-xs font-bold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-950 transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 hidden lg:block">
                <ArrowUpRight size={24} className="text-zinc-950" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dialog remains structurally similar but visually updated */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-white border-zinc-200 rounded-sm">
          {selectedService !== null && (
            <>
              <DialogHeader className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
                    {(() => {
                      const Icon = services[selectedService].icon;
                      return <Icon className="w-5 h-5 text-zinc-950" strokeWidth={2} />;
                    })()}
                  </div>
                  <DialogTitle className="text-2xl font-bold tracking-tight text-zinc-950">
                    {services[selectedService].title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-base font-medium text-zinc-500 leading-relaxed">
                  {services[selectedService].fullDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-950 mb-4">Strategic Value</h4>
                  <ul className="space-y-3">
                    {services[selectedService].benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-zinc-500">
                        <CheckCircle2 className="w-4 h-4 text-zinc-950 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-zinc-100 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-950 mb-3">Optimal Deployment</h4>
                  <p className="text-sm font-medium text-zinc-500 leading-relaxed">
                    {services[selectedService].useCases}
                  </p>
                </div>

                <div className="border-t border-zinc-100 pt-6">
                  <Link 
                    to="/contact" 
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center gap-3 bg-zinc-950 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors duration-300 group"
                  >
                    Initiate Project
                    <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
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