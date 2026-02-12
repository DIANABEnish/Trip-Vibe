import { Search } from "lucide-react";
import heroOcean from "@/assets/hero-ocean.jpg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" id="top">
      {/* Animated ocean background */}
      <div className="absolute inset-0">
        <img
          src={heroOcean}
          alt="Ocean waves"
          className="w-full h-full object-cover animate-ocean"
        />
        {/* Shimmer overlay for wave effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-shimmer" />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground animate-fade-up leading-tight">
          Adventure Starts Here
        </h1>
        <p className="mt-4 text-lg md:text-xl text-primary-foreground/85 max-w-xl animate-fade-up-delay-1">
          See more, try more, live more – with us by your side.
        </p>

        {/* Search bar */}
        <div className="mt-8 w-full max-w-md animate-fade-up-delay-2">
          <div className="flex items-center bg-primary-foreground rounded-full overflow-hidden shadow-xl">
            <input
              type="text"
              placeholder="Search Country or City"
              className="flex-1 px-6 py-4 text-foreground placeholder:text-muted-foreground bg-transparent outline-none text-sm"
            />
            <button className="gradient-brand px-8 py-4 text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
