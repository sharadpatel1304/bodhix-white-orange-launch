import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Neural Commerce",
      category: "E-Commerce",
      result: "340% more conversions",
      year: "2025",
      description: "Complete e-commerce platform rebuild with AI-powered recommendations.",
    },
    {
      title: "Quantum Analytics",
      category: "Data Platform",
      result: "50M+ events/day",
      year: "2024",
      description: "Real-time analytics pipeline handling massive data streams.",
    },
    {
      title: "Horizon Health",
      category: "Healthcare",
      result: "2M+ patients served",
      year: "2024",
      description: "HIPAA-compliant patient management and telehealth solution.",
    },
    {
      title: "Apex Logistics",
      category: "Supply Chain",
      result: "45% cost reduction",
      year: "2023",
      description: "End-to-end supply chain optimization and tracking.",
    },
    {
      title: "Pulse Finance",
      category: "Fintech",
      result: "$2B+ daily volume",
      year: "2023",
      description: "High-frequency trading platform with real-time risk management.",
    },
    {
      title: "Echo Media",
      category: "Streaming",
      result: "10M+ concurrent users",
      year: "2022",
      description: "Scalable streaming infrastructure with global CDN.",
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "98%", label: "Client Retention" },
    { value: "$500M+", label: "Revenue Generated" },
  ];

  return (
    <section id="projects" className="bg-background relative">
      {/* Hero Section */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 border-b border-border relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-12 w-32 h-32 border border-primary/10 rounded-full" />
        <div className="absolute bottom-1/4 left-12 w-16 h-16 border border-primary/10 rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl"
        >
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-8">
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
            Projects
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Results speak louder than words. Here's what we've built.
          </p>
        </motion.div>
      </div>

      {/* Stats Banner */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-light text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="space-y-px">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group border border-border p-6 lg:p-8 cursor-pointer hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-6 mb-2">
                    <span className="text-muted-foreground text-sm w-12">{project.year}</span>
                    <span className="text-primary text-sm font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-lg">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-6 lg:gap-12">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <TrendingUp className="w-4 h-4" strokeWidth={1.5} />
                    {project.result}
                  </div>
                  <ArrowUpRight 
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                    strokeWidth={1.5} 
                  />
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
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Ready to be our next success story?
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group text-lg"
          >
            Start your project
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
