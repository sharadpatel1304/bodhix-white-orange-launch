import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-tight">
              We build technology that <span className="text-primary">disappears</span>
            </h2>
          </motion.div>
          
          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              BodhiX was founded with a singular vision: to create technology that feels intuitive. We believe the best software disappears into the background, enabling people to focus on what matters most.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team combines deep technical expertise with a commitment to simplicity. Every product we build starts with understanding the problem, then crafting the most elegant solution possible.
            </p>
          </motion.div>
        </div>
        
        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "01", title: "Simplicity", description: "We strip away complexity to reveal what truly matters." },
            { number: "02", title: "Precision", description: "Every detail is considered, every line of code purposeful." },
            { number: "03", title: "Impact", description: "We measure success by the results we deliver for our clients." },
          ].map((value, index) => (
            <div key={value.number} className="border-t border-border pt-8">
              <span className="text-primary text-sm font-medium">{value.number}</span>
              <h3 className="text-xl font-medium text-foreground mt-2 mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-xl text-foreground font-medium"
        >
          Simple technology. <span className="text-primary">Extraordinary results.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default About;