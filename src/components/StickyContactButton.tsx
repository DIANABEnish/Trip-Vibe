import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ContactModal from "./ContactModal";

const StickyContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 bottom-6 z-50 gradient-brand w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-primary-foreground hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Contact us"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default StickyContactButton;
