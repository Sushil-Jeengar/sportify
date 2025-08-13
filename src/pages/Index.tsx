import { SEO } from "@/components/SEO";
import Hero from "@/components/home/Hero";
import CategoryShortcuts from "@/components/home/CategoryShortcuts";
import FeaturedPros from "@/components/home/FeaturedPros";
import FeaturedVideos from "@/components/home/FeaturedVideos";

const Index = () => {
  return (
    <main className="container mx-auto px-4 py-10">
      <SEO title="Sportify – Gear, Pros, Training" description="Modern sports platform with marketplace, professional services, and training hub. Fast, responsive, and SEO-optimized." path="/" />
      <h1 className="sr-only">Sportify – Gear, Pros, Training</h1>
      <Hero />
      <CategoryShortcuts />
      <FeaturedPros />
      <FeaturedVideos />
    </main>
  );
};

export default Index;
