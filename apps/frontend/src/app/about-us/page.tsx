import Roadmap from "@/components/roadmap/Roadmap";
import Mission from "@/components/about-us-sections/Mission";
import Features from "@/components/about-us-sections/Features";
import Contact from "@/components/about-us-sections/Contact";
import Hero from "@/components/about-us-sections/Hero";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <Hero />
      <Features />
      <Mission />
      <Roadmap />
      <Contact />
    </div>
  );
}
