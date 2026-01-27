import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Neural Commerce",
      category: "E-Commerce",
      result: "340% more conversions",
      year: "2025",
    },
    {
      title: "Quantum Analytics",
      category: "Data Platform",
      result: "50M+ events/day",
      year: "2024",
    },
    {
      title: "Horizon Health",
      category: "Healthcare",
      result: "2M+ patients served",
      year: "2024",
    },
    {
      title: "Apex Logistics",
      category: "Supply Chain",
      result: "45% cost reduction",
      year: "2023",
    },
    {
      title: "Pulse Finance",
      category: "Fintech",
      result: "$2B+ daily volume",
      year: "2023",
    },
    {
      title: "Echo Media",
      category: "Streaming",
      result: "10M+ concurrent users",
      year: "2022",
    },
  ];

  return (
    <section id="projects" className="bg-background relative">
      {/* Hero Section */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 border-b border-border">
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
          <p className="mt-6 text-lg text-muted-foreground">
            Results speak louder than words.
          </p>
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="divide-y divide-border">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group py-8 lg:py-10 cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-6 mb-2">
                    <span className="text-muted-foreground text-sm w-12">{project.year}</span>
                    <span className="text-muted-foreground text-sm">{project.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6 lg:gap-12">
                  <span className="text-primary font-medium">{project.result}</span>
                  <ArrowUpRight 
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                    strokeWidth={1.5} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
