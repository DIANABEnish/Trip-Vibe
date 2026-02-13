import { MapPin, Sun, Moon, Star, StarHalf } from "lucide-react";
import montenegroImg from "@/assets/destination-montenegro.jpg";
import georgiaImg from "@/assets/destination-georgia.jpg";
import abudhabiImg from "@/assets/destination-abudhabi.jpg";

const destinations = [
  {
    name: "Montenegro",
    image: montenegroImg,
    price: "$89",
    rating: 3.5,
    days: 5,
    nights: 4,
    description:
      "A picturesque view of Kotor Bay with medieval stone houses, boats on the calm Adriatic Sea, and dramatic green mountains.",
  },
  {
    name: "Georgia",
    image: georgiaImg,
    price: "$59",
    rating: 3.5,
    days: 5,
    nights: 4,
    description:
      "Scenic mountain village with colorful rooftops, traditional architecture, vineyards, and soft morning light.",
  },
  {
    name: "Abu Dhabi",
    image: abudhabiImg,
    price: "$79",
    rating: 3.5,
    days: 3,
    nights: 2,
    description:
      "A modern skyline at sunset with the Sheikh Zayed Grand Mosque glowing in golden light and futuristic skyscrapers.",
  },
];

const RatingStars = ({ rating }: { rating: number }) => {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} className="w-3.5 h-3.5 fill-accent text-accent" />
      ))}
      {hasHalf && <StarHalf className="w-3.5 h-3.5 fill-accent text-accent" />}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} className="w-3.5 h-3.5 text-accent/30" />
      ))}
    </div>
  );
};

const FeaturedDestinations = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Featured Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute left-4 bottom-3 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold text-sm shadow-lg z-10">
                  {dest.price}
                </div>
                <div className="absolute right-3 bottom-1 bg-card/95 backdrop-blur-sm px-2 py-1 rounded">
                  <RatingStars rating={dest.rating} />
                </div>
              </div>

              {/* Details */}
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-foreground">{dest.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
                  {dest.description}
                </p>
              </div>

              {/* Icons */}
              <div className="px-6 pb-5 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  {dest.name}
                </span>
                <span className="flex items-center gap-1">
                  <Sun className="w-3.5 h-3.5 text-accent" />
                  {dest.days} Days
                </span>
                <span className="flex items-center gap-1">
                  <Moon className="w-3.5 h-3.5 text-accent" />
                  {dest.nights} Nights
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
