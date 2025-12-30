const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            About
          </h2>
          <div className="mt-8 border-t border-border pt-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              BodhiX was founded with a singular vision: to create technology that feels intuitive. We believe the best software disappears into the background, enabling people to focus on what matters most.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our team combines deep technical expertise with a commitment to simplicity. Every product we build starts with understanding the problem, then crafting the most elegant solution possible.
            </p>
            <p className="mt-6 text-lg text-foreground font-medium">
              Simple technology. <span className="text-primary">Extraordinary results.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;