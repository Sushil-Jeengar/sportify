import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";
import { useMemo, useState } from "react";
import { useCart } from "@/contexts/CartContext";

import imgFootball from "@/assets/prod-football.jpg";
import imgBasketball from "@/assets/prod-basketball.jpg";
import imgCricket from "@/assets/prod-cricket.jpg";
import imgTennis from "@/assets/prod-tennis.jpg";

const allProducts = [
  { id: "p1", name: "Pro Football Boots", sport: "Football", price: 12900, rating: 4.8, image: imgFootball },
  { id: "p2", name: "Elite Basketball", sport: "Basketball", price: 8900, rating: 4.6, image: imgBasketball },
  { id: "p3", name: "Cricket Starter Kit", sport: "Cricket", price: 14900, rating: 4.7, image: imgCricket },
  { id: "p4", name: "Carbon Tennis Racket", sport: "Tennis", price: 17900, rating: 4.9, image: imgTennis },
];

const Marketplace = () => {
  const { addItem } = useCart();
  const [q, setQ] = useState("");
  const [sport, setSport] = useState<string | undefined>();
  const [sort, setSort] = useState("popular");

  const products = useMemo(() => {
    let list = allProducts.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    if (sport) list = list.filter((p) => p.sport === sport);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [q, sport, sort]);

  return (
    <main className="container mx-auto px-4 py-10">
      <SEO title="Marketplace | Sportify" description="Buy and sell sports equipment across football, basketball, cricket, tennis and more." path="/marketplace" />
      <h1 className="mb-6 text-3xl font-bold">Marketplace</h1>

      <section className="mb-6 grid gap-4 rounded-lg border bg-card p-4 shadow-sm md:grid-cols-3">
        <div>
          <Label htmlFor="q">Search</Label>
          <Input id="q" placeholder="Search products" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div>
          <Label>Sport</Label>
          <Select onValueChange={(v) => setSport(v)}>
            <SelectTrigger>
              <SelectValue placeholder="All sports" />
            </SelectTrigger>
            <SelectContent className="z-[60]">
              <SelectItem value="Football">Football</SelectItem>
              <SelectItem value="Basketball">Basketball</SelectItem>
              <SelectItem value="Cricket">Cricket</SelectItem>
              <SelectItem value="Tennis">Tennis</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Sort</Label>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="z-[60]">
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">{p.name}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center"><Star className="mr-1 h-4 w-4 text-primary" />{p.rating}</span>
                <span>• {p.sport}</span>
              </div>
            </CardHeader>
            <CardContent>
              <img src={p.image} alt={`${p.name} product photo`} className="mb-4 h-44 w-full rounded-md object-cover" loading="lazy" />
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">${(p.price / 100).toFixed(2)}</span>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => addItem({ id: p.id, name: p.name, price: p.price, image: p.image })}>Buy</Button>
                  <Button variant="outline">Sell</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default Marketplace;
