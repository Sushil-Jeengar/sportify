import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-3 h-8 w-8 rounded-md bg-gradient-hero shadow-glow" aria-hidden />
          <p className="text-sm text-muted-foreground">A modern platform for athletes, coaches, and enthusiasts.</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="story-link" to="/marketplace">Marketplace</Link></li>
            <li><Link className="story-link" to="/services">Professional Services</Link></li>
            <li><Link className="story-link" to="/training">Training Hub</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="story-link" to="/about">About Us</Link></li>
            <li><Link className="story-link" to="/contact">Contact</Link></li>
            <li><Link className="story-link" to="/faq">FAQs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="story-link" to="/privacy">Privacy Policy</Link></li>
            <li><Link className="story-link" to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Sportify. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
