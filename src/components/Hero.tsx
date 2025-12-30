const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
            Technology that moves your business forward
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            BodhiX delivers elegant software solutions designed to simplify complexity and accelerate growth.
          </p>
          <a
            href="#contact"
            className="inline-block mt-10 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;