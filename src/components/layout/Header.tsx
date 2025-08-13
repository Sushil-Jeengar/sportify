import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, LogIn, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthProvider";

export const Header = () => {
  const { count } = useCart();
  const { user, signOut } = useAuth();

  const navCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground";

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img className="h-8 w-8 rounded-md" src="sportify.ico" alt="" />
          <span className="text-lg font-bold">Sportify</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          <NavLink to="/marketplace" className={navCls} end>Marketplace</NavLink>
          <NavLink to="/services" className={navCls} end>Services</NavLink>
          <NavLink to="/training" className={navCls} end>Training</NavLink>
          <NavLink to="/about" className={navCls} end>About</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/marketplace" className="relative">
            <Button variant="outline" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            {count > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
          {user ? (
            <div className="flex items-center gap-2">
              <Link to="/dashboard"><Button variant="secondary" size="sm"><User className="mr-2 h-4 w-4"/>Dashboard</Button></Link>
              <Button variant="outline" size="sm" onClick={() => void signOut()}>Sign out</Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="cta" size="sm"><LogIn className="mr-2 h-4 w-4"/>Sign in</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
