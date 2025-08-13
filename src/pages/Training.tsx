import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Training = () => {
  return (
    <main className="container mx-auto px-4 py-10">
      <SEO title="Training & Learning Hub | Sportify" description="Watch training videos and download resources by sport and skill level." path="/training" />
      <h1 className="mb-6 text-3xl font-bold">Training & Learning Hub</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Featured Video</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/6WzoVqRz1iA"
                title="Training Video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Full-screen supported. Related resources and downloads coming soon.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Browse by Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {['Football','Basketball','Cricket','Tennis','Strength','Speed','Beginner','Advanced'].map((t) => (
                <span key={t} className="rounded-full border px-3 py-1 text-sm text-muted-foreground">{t}</span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Training;
