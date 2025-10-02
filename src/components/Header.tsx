import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  cartItemsCount?: number;
}

const Header = ({ cartItemsCount = 0 }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary shadow-sm">
      {/* Top utility bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto flex h-9 items-center justify-between px-4 text-xs text-primary-foreground/80">
          <div className="flex gap-4">
            <Link to="/support" className="hover:text-primary-foreground transition-colors">
              Support
            </Link>
            <Link to="/stores" className="hover:text-primary-foreground transition-colors">
              Stores
            </Link>
            <Link to="/blogs" className="hover:text-primary-foreground transition-colors">
              Blogs
            </Link>
          </div>
          <div className="hidden md:block">
            Online Shopping in Pakistan | Mobiles, Electronics, Appliances, Fashion & More
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4 md:gap-6">
          {/* Mobile menu */}
          <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground">
            <Menu className="h-5 w-5" />
          </Button>

          

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/public/Logo.png"
              alt="Telemart Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input
                type="search"
                placeholder="What Are You Looking For?"
                className="w-full pr-12 bg-white"
              />
              <Button
                size="icon"
                className="absolute right-0 top-0 h-full rounded-l-none bg-secondary hover:bg-secondary/90"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Cart and Sign In */}
          <div className="flex items-center gap-2">
            <Link to="/cart">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemsCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-secondary">
                      {cartItemsCount}
                    </Badge>
                  )}
                </div>
                <span className="hidden md:inline">Cart</span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              <User className="h-5 w-5" />
              <span className="hidden md:inline">Sign in</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Category navigation */}
      <div className="border-t border-primary-foreground/10 bg-primary/95">
        <div className="container mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto py-2 text-sm scrollbar-hide">
            {[
              "Mobiles & Tablets",
              "Electronics",
              "Appliances",
              "Men's Fashion",
              "Women's Fashion",
              "Home & Living",
              "Computer & Gaming",
              "Health & Care",
            ].map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="whitespace-nowrap px-3 py-1.5 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded transition-colors"
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
