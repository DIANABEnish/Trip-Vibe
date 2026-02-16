import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MapPin, Star, Sparkles, MessageCircle } from "lucide-react";
import { useState } from "react";
import { allDestinations, type DestinationInfo } from "@/data/destinations";
import ContactModal from "./ContactModal";

interface DestinationModalProps {
  open: boolean;
  onClose: () => void;
  cityName: string;
  cityImage?: string;
}

const DestinationModal = ({ open, onClose, cityName, cityImage }: DestinationModalProps) => {
  const [contactOpen, setContactOpen] = useState(false);
  const info = allDestinations[cityName];
  if (!info) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
        <DialogContent className="max-w-lg w-[calc(100%-2rem)] mx-auto p-0 overflow-hidden rounded-2xl border-0 shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Hero image or gradient header */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            {(cityImage || info.imageUrl) ? (
                <img
                  src={cityImage || info.imageUrl}
                  alt={cityName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full gradient-brand" />
              )}
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
            <p className="text-muted-foreground leading-relaxed text-sm">{info.description}</p>

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
              <p className="text-sm text-muted-foreground leading-relaxed">{info.whyVisit}</p>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setContactOpen(true)}
              className="w-full gradient-brand text-primary-foreground font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg text-sm md:text-base"
            >
              <MessageCircle className="w-4 h-4" />
              Sounds amazing? Let's plan your trip!
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default DestinationModal;
