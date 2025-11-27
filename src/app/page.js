import HeroSection from "./Components/Hero";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
