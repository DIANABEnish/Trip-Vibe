import bannerImg from "@/assets/banner-beach.jpg";

const Banner = () => {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-foreground/65" />
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Unlock 15% Off Your Next Getaway
            </h2>
            <p className="text-primary-foreground/80 mt-3 text-lg">
              Confirm your booking before 21st June and get instant savings on your trip.
            </p>
          </div>
          <button className="px-8 py-3 rounded-full border-2 border-primary-foreground text-primary-foreground font-medium hover:bg-primary-foreground/15 transition-all duration-300 whitespace-nowrap">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
