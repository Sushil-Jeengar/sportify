import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthProvider";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/auth" replace />;

  return (
    <main className="container mx-auto px-4 py-10">
      <SEO title="Dashboard | Sportify" description="Manage your account, orders, saved videos, and bookings." path="/dashboard" />
      <h1 className="mb-6 text-3xl font-bold">Your Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: 'Account Settings', desc: 'Update personal info and security.' },
          { title: 'Orders', desc: 'View order history and tracking.' },
          { title: 'Saved Videos', desc: 'Continue learning and track progress.' },
          { title: 'Bookings', desc: 'Manage coaching and therapy sessions.' },
        ].map((c) => (
          <Card key={c.title}>
            <CardHeader><CardTitle>{c.title}</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">{c.desc}</CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
