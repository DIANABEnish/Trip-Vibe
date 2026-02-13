import { useState } from "react";
import telavivImg from "@/assets/gallery-telaviv.jpg";
import singaporeImg from "@/assets/gallery-singapore.jpg";
import romeImg from "@/assets/gallery-rome.jpg";
import mykonosImg from "@/assets/gallery-mykonos.jpg";
import DestinationModal from "./DestinationModal";


const cities = [
  { name: "Tel Aviv", image: telavivImg },
  { name: "Singapore", image: singaporeImg },
  { name: "Rome", image: romeImg },
  { name: "Mykonos", image: mykonosImg },
];

const Gallery = () => {
  const [selected, setSelected] = useState<{ name: string; image: string } | null>(null);

  return (
    <section className="py-20 md:py-28 px-6 bg-muted">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Travelling Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cities.map((city) => (
            <div
              key={city.name}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelected(city)}
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-52 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <h4 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground font-semibold text-lg drop-shadow-lg">
                {city.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <DestinationModal
          open={!!selected}
          onClose={() => setSelected(null)}
          cityName={selected.name}
          cityImage={selected.image}
        />
      )}
    </section>
  );
};

export default Gallery;
