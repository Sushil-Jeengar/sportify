import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import pro1 from "@/assets/pro-coach-1.jpg";
import pro2 from "@/assets/pro-physio.jpg";
import pro3 from "@/assets/pro-nutritionist.jpg";
import { Button } from "@/components/ui/button";

const pros = [
  { id: "coach-1", name: "Alex Carter", role: "Head Coach", image: pro1 },
  { id: "physio-1", name: "Dr. Mia Patel", role: "Physiotherapist", image: pro2 },
  { id: "nutri-1", name: "Liam Nguyen", role: "Nutritionist", image: pro3 },
];

const FeaturedPros = () => {
  return (
    <section className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Top Professionals</h2>
        <Button variant="link" className="story-link" asChild>
          <a href="/services">See all</a>
        </Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pros.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">{p.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{p.role}</p>
            </CardHeader>
            <CardContent>
              <img src={p.image} alt={`${p.name} - ${p.role}`} className="mb-4 h-44 w-full rounded-md object-cover" loading="lazy" />
              <Button variant="secondary" className="w-full">View Profile</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPros;
