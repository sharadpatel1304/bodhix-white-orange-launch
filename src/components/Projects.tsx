import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Neural Commerce",
      category: "E-Commerce Platform",
      description: "AI-powered shopping experience that increased conversions by 340% for a Fortune 500 retailer.",
      year: "2025",
    },
    {
      title: "Quantum Analytics",
      category: "Data Infrastructure",
      description: "Real-time analytics pipeline processing 50M+ events daily for a fintech unicorn.",
      year: "2024",
    },
    {
      title: "Horizon Health",
      category: "Healthcare SaaS",
      description: "Patient management system serving 2M+ users across 300 healthcare facilities.",
      year: "2024",
    },
    {
      title: "Apex Logistics",
      category: "Supply Chain",
      description: "End-to-end supply chain optimization reducing operational costs by 45%.",
      year: "2023",
    },
    {
      title: "Pulse Finance",
      category: "Fintech",
      description: "Algorithmic trading platform processing $2B+ in daily transactions.",
      year: "2023",
    },
    {
      title: "Echo Media",
      category: "Content Platform",
      description: "Streaming infrastructure supporting 10M+ concurrent users with 99.99% uptime.",
      year: "2022",
    },
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background relative">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
            Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A selection of projects where we've helped companies reimagine what's possible.
          </p>
        </motion.div>
        
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group border-t border-border py-8 cursor-pointer hover:bg-secondary/30 transition-colors -mx-6 px-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-primary text-sm font-medium">{project.year}</span>
                    <span className="text-muted-foreground text-sm">{project.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-normal text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground max-w-xl">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight 
                  className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                  strokeWidth={1.5} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
