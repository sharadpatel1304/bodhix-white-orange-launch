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

  const stats = [
    { value: "50+", label: "Projects" },
    { value: "98%", label: "Retention" },
    { value: "$500M+", label: "Revenue" },
  ];

  return (
    <section id="projects" className="bg-background relative">
      {/* Compact Hero */}
      <div className="py-16 lg:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                Projects
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Results speak louder than words. Here's what we've built.
              </p>
            </div>
            
            {/* Stats inline */}
            <div className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-light text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid - 2x3 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group border border-border rounded-lg p-6 cursor-pointer hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground">{project.year}</span>
                <ArrowUpRight 
                  className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
                  strokeWidth={1.5} 
                />
              </div>
              <span className="text-primary text-xs font-medium">{project.category}</span>
              <h3 className="text-xl font-light text-foreground group-hover:text-primary transition-colors mt-1 mb-3">
                {project.title}
              </h3>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <TrendingUp className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                {project.result}
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
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Ready to be our next success story?
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group text-sm"
          >
            Start your project
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
