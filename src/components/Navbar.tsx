import { useState } from "react";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 max-w-[1400px] mx-auto w-full">
        <button
          onClick={scrollToTop}
          className="text-2xl md:text-3xl font-bold tracking-tight text-primary-foreground hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Scroll to top"
        >
          Trip<span className="gradient-brand-text">Vibe</span>
        </button>

        <button
          onClick={() => setLoginOpen(true)}
          className="px-6 py-2 rounded-full border-2 border-primary-foreground/80 text-primary-foreground bg-transparent hover:bg-primary-foreground/15 transition-all duration-300 text-sm font-medium tracking-wide"
        >
          Login
        </button>
      </nav>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
};

export default Navbar;
