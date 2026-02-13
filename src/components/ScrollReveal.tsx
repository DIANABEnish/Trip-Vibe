import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReactNode } from "react";

const ScrollReveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollReveal(0.12);
  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
