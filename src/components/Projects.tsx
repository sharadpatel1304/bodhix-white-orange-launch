import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    { 
      title: "Kupaaniru", 
      category: "E-commerce & Brand", 
      year: "2024", 
      link: "https://kupaaniru.com",
      description: "A premium digital storefront optimized for high conversion and seamless user flow."
    },
    { 
      title: "Baroda Bearing Centre", 
      category: "Industrial Corporate", 
      year: "2024", 
      link: "https://www.barodabearingcentre.in",
      description: "A professional business platform showcasing industrial scale and inventory depth."
    },
  ];

  return (
    <section id="projects" className="bg-background relative py-24 overflow-hidden">
      {/* Background Decorative Element - Subtle Glass Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Portfolio</h2>
            <h1 className="text-4xl md:text-6xl font-light text-foreground tracking-tighter">
              Selected <span className="italic font-serif">Works</span>
            </h1>
          </motion.div>
        </header>

        <div className="grid gap-1">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border-t border-border/50 py-12 flex flex-col md:flex-row md:items-center justify-between transition-all hover:px-4"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors -z-10 rounded-xl" />

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 flex-1">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                    {project.year}
                  </span>
                  <div className="h-px w-8 bg-border group-hover:w-12 group-hover:bg-primary transition-all" />
                  <span className="text-xs uppercase tracking-widest text-primary/60 font-medium">
                    {project.category}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-4xl font-light text-foreground group-hover:text-primary transition-colors flex items-center gap-3">
                    {project.title}
                    {project.link !== "#" && (
                      <Globe size={18} className="opacity-0 group-hover:opacity-100 text-muted-foreground transition-all" />
                    )}
                  </h3>
                  {project.description && (
                    <p className="text-sm text-muted-foreground max-w-md line-clamp-1 group-hover:line-clamp-none transition-all">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 md:mt-0 flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                  View Project
                </span>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <ArrowUpRight 
                    className="w-5 h-5 text-muted-foreground group-hover:text-white transition-all" 
                    strokeWidth={1} 
                  />
                </div>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-border/50" />
        </div>

        {/* Footer CTA */}
        <footer className="mt-24 flex flex-col items-center text-center">
          <p className="text-muted-foreground mb-6">Have a vision in mind?</p>
          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-primary transition-colors"
          >
            Start your project
          </motion.a>
        </footer>
      </div>
    </section>
  );
};

export default Projects;