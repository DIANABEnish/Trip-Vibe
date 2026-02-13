import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MapPin, Star, Sparkles } from "lucide-react";

interface DestinationInfo {
  tagline: string;
  description: string;
  highlights: string[];
  whyVisit: string;
}

const destinationData: Record<string, DestinationInfo> = {
  "Tel Aviv": {
    tagline: "Where Ancient Roots Meet Modern Vibes",
    description:
      "Tel Aviv is a sun-drenched Mediterranean gem that seamlessly blends history with cutting-edge culture. Known as the 'White City' for its UNESCO-listed Bauhaus architecture, it pulses with energy day and night.",
    highlights: [
      "Jaffa Old City – 4,000-year-old port with art galleries & cobblestone alleys",
      "Carmel Market – Vibrant shuk bursting with spices, street food & local flavors",
      "Rothschild Boulevard – Tree-lined promenade showcasing Bauhaus masterpieces",
      "Gordon Beach – Golden sand, turquoise water & legendary sunset views",
    ],
    whyVisit:
      "Tel Aviv offers a rare mix of world-class nightlife, incredible cuisine, rich history, and year-round Mediterranean sunshine. It's a city that never sleeps and always surprises.",
  },
  Singapore: {
    tagline: "A Futuristic City-State Like No Other",
    description:
      "Singapore packs jaw-dropping attractions into a compact island. From gravity-defying architecture to lush tropical gardens, this city-state is a masterclass in blending nature with innovation.",
    highlights: [
      "Gardens by the Bay – Iconic Supertrees & the Cloud Forest dome",
      "Marina Bay Sands – Rooftop infinity pool with a skyline panorama",
      "Hawker Centers – Michelin-starred street food from just a few dollars",
      "Sentosa Island – Beaches, Universal Studios & adventure parks",
    ],
    whyVisit:
      "Singapore is one of the world's safest, cleanest, and most diverse destinations. Every neighborhood tells a different cultural story – from Little India to Chinatown to the futuristic Marina Bay.",
  },
  Rome: {
    tagline: "The Eternal City of Art, History & La Dolce Vita",
    description:
      "Rome is a living museum where ancient ruins stand side by side with bustling piazzas, world-class restaurants, and vibrant street life. Every cobblestone has a story to tell.",
    highlights: [
      "The Colosseum – Iconic amphitheater of gladiatorial legend",
      "Vatican City – St. Peter's Basilica & the Sistine Chapel",
      "Trastevere – Charming neighborhood with authentic Roman trattorias",
      "Trevi Fountain – Toss a coin and make a wish at this Baroque masterpiece",
    ],
    whyVisit:
      "Rome delivers an unmatched combination of ancient wonders, Renaissance art, and arguably the best food on the planet. It's a city that feeds the soul – literally and figuratively.",
  },
  Mykonos: {
    tagline: "The Jewel of the Greek Islands",
    description:
      "Mykonos is the ultimate Greek island escape – think whitewashed villages, crystal-clear Aegean waters, and legendary sunsets. It's equal parts glamorous and laid-back.",
    highlights: [
      "Little Venice – Colorful waterfront houses with waves crashing below",
      "Delos Island – UNESCO World Heritage site & mythological birthplace of Apollo",
      "Paradise & Super Paradise Beaches – World-famous party & relaxation spots",
      "Windmills of Kato Mili – Iconic 16th-century landmarks overlooking the sea",
    ],
    whyVisit:
      "Mykonos offers the perfect blend of stunning natural beauty, rich mythology, world-class beach clubs, and an atmosphere that's both electric and deeply relaxing.",
  },
};

interface DestinationModalProps {
  open: boolean;
  onClose: () => void;
  cityName: string;
  cityImage: string;
}

const DestinationModal = ({ open, onClose, cityName, cityImage }: DestinationModalProps) => {
  const info = destinationData[cityName];
  if (!info) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg p-0 overflow-hidden rounded-2xl border-0 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Hero image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={cityImage}
            alt={cityName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <DialogHeader>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                {cityName}
              </DialogTitle>
              <DialogDescription className="text-white/90 text-sm font-medium drop-shadow">
                {info.tagline}
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 pt-2 space-y-5">
          <p className="text-muted-foreground leading-relaxed text-sm">
            {info.description}
          </p>

          {/* Highlights */}
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
              <MapPin className="w-4 h-4 text-brand-orange" />
              Must-See Highlights
            </h4>
            <ul className="space-y-2">
              {info.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Star className="w-3.5 h-3.5 text-brand-orange mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why visit */}
          <div className="rounded-xl bg-muted p-4">
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              Why It's Worth It
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {info.whyVisit}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationModal;
