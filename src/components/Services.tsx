import { Palmtree, Mountain, Briefcase, Users } from "lucide-react";

const services = [
  {
    icon: Palmtree,
    title: "Luxury Vacations",
    description:
      "Indulge in premium resorts, private villas, and exclusive experiences tailored for the ultimate relaxation.",
  },
  {
    icon: Mountain,
    title: "Adventure Tours",
    description:
      "Explore breathtaking landscapes with guided hikes, diving excursions, and off-the-beaten-path adventures.",
  },
  {
    icon: Briefcase,
    title: "Business Travel",
    description:
      "Seamless corporate travel solutions with premium lounges, flexible bookings, and dedicated support.",
  },
  {
    icon: Users,
    title: "Family Packages",
    description:
      "Create lasting memories with family-friendly itineraries, kid-safe activities, and all-inclusive deals.",
  },
];

const Services = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-muted">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Our Services
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          From relaxation to exploration, we craft the perfect trip for every type of traveler.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-500 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
