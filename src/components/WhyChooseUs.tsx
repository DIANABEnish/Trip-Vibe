import { Compass, Headphones, FileText, BadgeDollarSign } from "lucide-react";

const reasons = [
  {
    icon: Compass,
    title: "Expert Guides",
    description: "Local experts who know every hidden gem and secret spot to make your trip truly special.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance wherever you are, so you can travel with complete peace of mind.",
  },
  {
    icon: FileText,
    title: "Personalized Itineraries",
    description: "Custom-crafted travel plans designed around your preferences, pace, and budget.",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Price Guarantee",
    description: "We match or beat any comparable offer — premium experiences without the premium price tag.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Why Choose Us?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Thousands of travelers trust us to deliver unforgettable experiences every time.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="relative bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-500 text-center overflow-hidden"
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-brand-horizontal" />

              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
