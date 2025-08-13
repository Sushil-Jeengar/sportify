import { PlayCircle } from "lucide-react";
import vid1 from "@/assets/video-strength.jpg";
import vid2 from "@/assets/video-skills.jpg";

const videos = [
  { id: "v1", title: "Strength & Conditioning Basics", image: vid1 },
  { id: "v2", title: "Elite Footwork Drills", image: vid2 },
];

const FeaturedVideos = () => {
  return (
    <section className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Featured Training</h2>
        <a className="story-link text-sm" href="/training">Browse all</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {videos.map((v) => (
          <article key={v.id} className="group relative overflow-hidden rounded-lg border bg-card shadow-sm">
            <img src={v.image} alt={`${v.title} training thumbnail`} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 p-4">
              <PlayCircle className="h-6 w-6 text-primary" />
              <h3 className="text-base font-semibold">{v.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedVideos;
