import { Phone, Mail, Home, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="gradient-brand text-primary-foreground">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold mb-4 block hover:opacity-80 transition-opacity cursor-pointer"
            >
              TripVibe
            </button>
            <p className="text-primary-foreground/80 text-xs leading-relaxed">
              Thanks for stopping by! Whether you're dreaming of a relaxing escape, an action-packed
              adventure, or an inspiring cultural journey – we're here to make it happen.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-xs">
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Deals & Offers</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Customer Review</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Cancellation Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Quick Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" /> +1 0123456789
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" /> hello@tripvibe.com
              </li>
              <li className="flex items-center gap-2">
                <Home className="w-3.5 h-3.5" /> ABC Road, ABC City
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-xs">
              <li className="flex items-center gap-2 hover:text-primary-foreground transition-colors cursor-pointer">
                <Facebook className="w-3.5 h-3.5" /> Facebook
              </li>
              <li className="flex items-center gap-2 hover:text-primary-foreground transition-colors cursor-pointer">
                <Youtube className="w-3.5 h-3.5" /> YouTube
              </li>
              <li className="flex items-center gap-2 hover:text-primary-foreground transition-colors cursor-pointer">
                <Twitter className="w-3.5 h-3.5" /> Twitter
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-10 border-primary-foreground/20" />
        <p className="text-center text-primary-foreground/60 text-xs mt-4">
          © 2025 DB Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
