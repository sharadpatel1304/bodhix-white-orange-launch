import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "15+ years building enterprise software. Former engineering lead at Google Cloud.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sarah Miller",
      role: "Chief Technology Officer",
      bio: "Architect of scalable systems. Previously VP Engineering at a Series C startup.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "James Park",
      role: "Head of Product",
      bio: "Product visionary with a track record of 0-to-1 launches. Ex-Meta product lead.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Emily Johnson",
      role: "Lead Engineer",
      bio: "Full-stack expert specializing in distributed systems and cloud infrastructure.",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section id="team" className="py-24 lg:py-32 bg-background relative">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Our People
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
            Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A small team of experienced builders who believe in doing less, better.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] bg-secondary/50 mb-4 border border-border group-hover:border-primary/30 transition-colors" />
              <p className="text-lg font-medium text-foreground">{member.name}</p>
              <p className="text-sm text-primary mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{member.bio}</p>
              <div className="flex gap-3">
                <a href={member.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href={member.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;