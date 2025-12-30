import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ParticleVortex from "./ParticleVortex";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-background relative overflow-hidden pt-16">
      {/* Particle Vortex - positioned to the right */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <ParticleVortex />
      </div>
      
      {/* Content - Left side */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-xl">
          {/* Small caps label */}
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-6">
            Tech Solutions
          </p>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-[1.1]">
            BodhiX
          </h1>
          
          {/* Subtext */}
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
            We craft bold strategies that transform businesses. Precision thinking meets decisive action.
          </p>
          
          {/* CTA Link */}
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 mt-8 text-sm text-foreground hover:text-primary transition-colors group"
          >
            Explore our work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
