import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import pro1 from "@/assets/pro-coach-1.jpg";
import pro2 from "@/assets/pro-physio.jpg";
import pro3 from "@/assets/pro-nutritionist.jpg";
import { toast } from "@/hooks/use-toast";

const pros = [
  { id: "coach-1", name: "Alex Carter", role: "Head Coach", bio: "10+ years coaching elite athletes.", image: pro1 },
  { id: "physio-1", name: "Dr. Mia Patel", role: "Physiotherapist", bio: "Injury prevention & recovery expert.", image: pro2 },
  { id: "nutri-1", name: "Liam Nguyen", role: "Nutritionist", bio: "Performance nutrition & meal plans.", image: pro3 },
];

const Services = () => {
  return (
    <main className="container mx-auto px-4 py-10">
      <SEO title="Professional Services | Sportify" description="Book coaches, physiotherapists, and nutritionists with ratings and availability." path="/services" />
      <h1 className="mb-6 text-3xl font-bold">Professional Services</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pros.map((p) => (
          <Card key={p.id}>
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{p.role}</p>
            </CardHeader>
            <CardContent>
              <img src={p.image} alt={`${p.name} - ${p.role}`} className="mb-4 h-44 w-full rounded-md object-cover" loading="lazy" />
              <p className="mb-4 text-sm text-muted-foreground">{p.bio}</p>
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => toast({ title: "Booking", description: "Booking flow coming soon." })}>Book</Button>
                <Button variant="outline">View Profile</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Services;
