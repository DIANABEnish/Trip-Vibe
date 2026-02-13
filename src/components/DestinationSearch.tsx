import { useState, useRef, useEffect } from "react";
import { Search, MapPin, Globe } from "lucide-react";
import { searchDestinations, allDestinations } from "@/data/destinations";

interface DestinationSearchProps {
  onSelectDestination: (name: string) => void;
}

const DestinationSearch = ({ onSelectDestination }: DestinationSearchProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 0) {
      setResults(searchDestinations(query));
      setOpen(true);
      setActiveIndex(-1);
    } else {
      setResults([]);
      setOpen(false);
    }
  }, [query]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (name: string) => {
    setQuery("");
    setOpen(false);
    onSelectDestination(name);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i < results.length - 1 ? i + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i > 0 ? i - 1 : results.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(results[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md">
      <div className="flex items-center bg-primary-foreground rounded-full overflow-hidden shadow-xl">
        <input
          type="text"
          placeholder="Search Country or City"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 0 && setOpen(true)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-6 py-4 text-foreground placeholder:text-muted-foreground bg-transparent outline-none text-sm"
        />
        <button
          className="gradient-brand px-8 py-4 text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
          onClick={() => {
            if (results.length > 0) handleSelect(results[0]);
          }}
        >
          <Search className="w-4 h-4" />
          Search
        </button>
      </div>

      {/* Dropdown */}
      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background rounded-xl shadow-2xl border border-border overflow-hidden z-50 animate-fade-up">
          {results.map((name, i) => {
            const dest = allDestinations[name];
            return (
              <button
                key={name}
                className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                  i === activeIndex
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-muted text-foreground"
                }`}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => handleSelect(name)}
              >
                {dest?.type === "country" ? (
                  <Globe className="w-4 h-4 text-brand-orange shrink-0" />
                ) : (
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                )}
                <div className="min-w-0">
                  <span className="font-medium text-sm">{name}</span>
                  <span className="ml-2 text-xs text-muted-foreground capitalize">
                    {dest?.type}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {open && query.length > 0 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background rounded-xl shadow-2xl border border-border p-4 z-50 text-center text-sm text-muted-foreground">
          No destinations found for "{query}"
        </div>
      )}
    </div>
  );
};

export default DestinationSearch;
