const reviews = [
  {
    text: "Georgia completely surprised me – the views, the food, and the people were all incredible. Booking through the site made everything easy and stress-free.",
    name: "Sofia Levin",
    location: "Georgia",
    stars: 5,
  },
  {
    text: "Our trip to Montenegro was unforgettable! The recommendations for hidden beaches and local restaurants really made it feel like we were discovering the country from within.",
    name: "Daniel Cohen",
    location: "Montenegro",
    stars: 4,
  },
  {
    text: "Abu Dhabi was a dream. The desert tour, the skyline, the culture—everything was perfectly planned. I felt like a VIP traveler the entire time.",
    name: "Layla Morgan",
    location: "Abu Dhabi",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          What Our Travelers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative bg-card rounded-xl p-8 pt-10 card-shadow text-center flex flex-col items-center"
            >
              {/* Quote mark */}
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-7xl font-serif text-primary/30 leading-none select-none">
                &rdquo;
              </span>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {r.text}
              </p>

              <div className="mt-6">
                <h5 className="font-semibold text-foreground">{r.name}</h5>
                <small className="text-muted-foreground text-xs">{r.location}</small>
                <div className="mt-2 text-accent text-sm tracking-wider">
                  {"★".repeat(r.stars)}
                  {"☆".repeat(5 - r.stars)}
                </div>
              </div>

              {/* Avatar circle */}
              <div className="mt-4 w-14 h-14 rounded-full gradient-brand flex items-center justify-center text-primary-foreground font-bold text-lg">
                {r.name.charAt(0)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
