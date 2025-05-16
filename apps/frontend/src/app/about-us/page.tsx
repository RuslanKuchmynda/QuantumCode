import Roadmap from "@/components/roadmap/Roadmap";
import Mission from "@/components/about-us/Mission";
import Features from "@/components/about-us/Features";
import Contact from "@/components/about-us/Contact";
import Hero from "@/components/about-us/Hero";

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
