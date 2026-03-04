import Hero from "@/components/Hero";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { PostFluxNavbar } from "@/components/PostFluxNavbar";

export default function Home() {
  return (
    <>
      <PostFluxNavbar />
      <main>
        <Hero />
        <HeroScrollDemo />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
