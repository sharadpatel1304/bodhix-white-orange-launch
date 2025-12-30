const Services = () => {
  const services = [
    {
      title: "Platform Development",
      description: "Custom SaaS platforms built for scale, security, and seamless user experience.",
    },
    {
      title: "System Integration",
      description: "Connect your existing tools and workflows into a unified, efficient ecosystem.",
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that drive strategic decisions.",
    },
    {
      title: "Cloud Infrastructure",
      description: "Modern cloud architecture designed for reliability, performance, and cost efficiency.",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Services
        </h2>
        <div className="mt-8 border-t border-border pt-8">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {services.map((service, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium text-foreground">
                  <span className="text-primary mr-2">{String(index + 1).padStart(2, "0")}</span>
                  {service.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;