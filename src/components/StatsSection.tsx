import { motion } from "framer-motion";

const stats = [
  { value: "∞", label: "Possibilities Explored" },
  { value: "0", label: "Compromises Made" },
  { value: "10⁹", label: "Data Points Processed" },
  { value: "1", label: "Obsession: Craft" },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-secondary/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-light text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
