import { SEO } from "@/components/SEO";

const About = () => (
  <main className="container mx-auto px-4 py-10">
    <SEO title="About Us | Sportify" description="Learn about Sportify's mission to empower athletes and coaches worldwide." path="/about" />
    <h1 className="mb-4 text-3xl font-bold">About Us</h1>
    <p className="max-w-2xl text-muted-foreground">We are on a mission to connect athletes with the gear, experts, and knowledge they need to reach the next level. Built for speed, designed for clarity, and optimized for every screen.</p>
  </main>
);

export default About;
