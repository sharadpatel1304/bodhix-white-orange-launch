import { motion } from "framer-motion";
import ParticleVortex from "./ParticleVortex";
import laughingBuddha from "@/assets/laughing-buddha.png";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Buddha Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Buddha with Particle Vortex */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            {/* Vortex behind the buddha */}
            <div className="absolute inset-0 z-0">
              <ParticleVortex />
            </div>
            
            {/* Laughing Buddha with glowing aura and floating animation */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              {/* Pulsing glow effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 60px 30px rgba(194, 102, 55, 0.3)",
                    "0 0 100px 50px rgba(194, 102, 55, 0.5)",
                    "0 0 60px 30px rgba(194, 102, 55, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full"
              />
              {/* Floating buddha image */}
              <motion.img 
                src={laughingBuddha}
                alt="Laughing Buddha - Symbol of Joy and Prosperity"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain opacity-95 drop-shadow-2xl"
              />
            </div>
          </motion.div>
          
          {/* Buddha Significance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
              Our Symbol
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-tight">
              The <span className="text-primary">Laughing Buddha</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Laughing Buddha, also known as Budai or Hotei, is a symbol of contentment, abundance, and good fortune. His joyful demeanor represents the happiness that comes from living a life of wisdom and generosity.
              </p>
              <p>
                At <span className="text-navy italic font-medium">B<span className="text-primary">o</span>dhiX</span>, we embrace this philosophy. Just as the Laughing Buddha finds joy in simplicity, we believe the best technology should bring ease and delight—not complexity and frustration.
              </p>
              <p>
                The name "Bodhi" means awakening or enlightenment, reflecting our mission to illuminate paths forward through thoughtful innovation. Combined with "X" for transformation, BodhiX represents the enlightened transformation we bring to every project.
              </p>
            </div>
          </motion.div>
        </div>

        {/* About Content */}
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
          ].map((value) => (
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