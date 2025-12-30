const Team = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
    },
    {
      name: "Sarah Miller",
      role: "Chief Technology Officer",
    },
    {
      name: "James Park",
      role: "Head of Product",
    },
    {
      name: "Emily Johnson",
      role: "Lead Engineer",
    },
  ];

  return (
    <section id="team" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Team
        </h2>
        <div className="mt-8 border-t border-border pt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index}>
                <p className="text-lg font-medium text-foreground">{member.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;