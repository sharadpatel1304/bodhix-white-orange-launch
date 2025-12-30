import ParticleVortex from "./ParticleVortex";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <ParticleVortex />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-foreground">
          BodhiX
        </h1>
      </div>
    </section>
  );
};

export default Hero;