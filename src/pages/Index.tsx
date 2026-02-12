import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Banner from "@/components/Banner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <FeaturedDestinations />
      <Services />
      <Gallery />
      <Banner />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
