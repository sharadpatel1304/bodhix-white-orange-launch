import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    { title: "Test 1", category: "Category", year: "2025" },
    { title: "Test 2", category: "Category", year: "2025" },
    { title: "Test 3", category: "Category", year: "2024" },
    { title: "Test 4", category: "Category", year: "2024" },
    { title: "Test 5", category: "Category", year: "2023" },
    { title: "Test 6", category: "Category", year: "2023" },
  ];

  return (
    <section id="projects" className="bg-background relative">
      {/* Compact Hero */}
      <div className="py-12 lg:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-2">
              Projects
            </h1>
            <p className="text-muted-foreground">
              Results speak louder than words.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="border-t border-border">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group border-b border-border py-5 flex items-center justify-between cursor-pointer hover:bg-secondary/30 transition-colors px-4 -mx-4"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs text-muted-foreground w-12">{project.year}</span>
                <span className="text-xs text-primary font-medium w-24">{project.category}</span>
                <h3 className="text-lg font-light text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              <ArrowUpRight 
                className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
                strokeWidth={1.5} 
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm"
          >
            Start your project
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
