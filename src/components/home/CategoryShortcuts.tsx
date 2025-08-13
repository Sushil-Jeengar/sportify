import { Button } from "@/components/ui/button";
import { Dumbbell, Volleyball, Bike, Trophy, Activity } from "lucide-react";

const items = [
  { label: "Football", Icon: Trophy },
  { label: "Basketball", Icon: Activity },
  { label: "Cricket", Icon: Volleyball },
  { label: "Tennis", Icon: Dumbbell },
  { label: "Cycling", Icon: Bike },
];

const CategoryShortcuts = () => {
  return (
    <section className="mt-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Shop by Category</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map(({ label, Icon }) => (
          <Button key={label} variant="outline" className="hover-scale">
            <Icon className="mr-2 h-4 w-4" />
            {label}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default CategoryShortcuts;
