import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Banner from "@/components/Banner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StickyContactButton from "@/components/StickyContactButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ScrollReveal>
        <FeaturedDestinations />
      </ScrollReveal>
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <Gallery />
      </ScrollReveal>
      <ScrollReveal>
        <Banner />
      </ScrollReveal>
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <Footer />
      <StickyContactButton />
    </main>
  );
};

export default Index;
