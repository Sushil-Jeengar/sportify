import { SEO } from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <main className="container mx-auto px-4 py-10">
    <SEO title="Contact | Sportify" description="Get in touch with the Sportify team for support or inquiries." path="/contact" />
    <h1 className="mb-4 text-3xl font-bold">Contact</h1>
    <div className="max-w-md space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
      <div>
        <Label htmlFor="msg">Message</Label>
        <textarea id="msg" className="min-h-32 w-full rounded-md border bg-background p-3 text-sm" placeholder="How can we help?" />
      </div>
      <Button variant="cta">Send</Button>
    </div>
  </main>
);

export default Contact;
