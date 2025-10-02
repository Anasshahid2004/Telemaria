import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      {/* Newsletter section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="h-8 w-8 text-secondary" />
              <div>
                <h3 className="font-semibold text-lg">Subscribe to our Newsletter</h3>
                <p className="text-sm text-primary-foreground/70">Get latest deals and offers</p>
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto md:min-w-[400px]">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="font-semibold text-lg mb-4">About TechMart</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Pakistan's leading online shopping platform offering the best prices on electronics, fashion, and home appliances.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10 hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10 hover:text-secondary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10 hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10 hover:text-secondary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Customer Service */}
          <div>
  <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
  <ul className="space-y-2 text-sm">
    {["Contact Us", "Track Order", "Returns & Refunds", "Shipping Info", "FAQs"].map((item) => (
      <li key={item}>
        {item === "Contact Us" ? (
          <Link
            to="/contact"
            className="text-primary-foreground/70 hover:text-secondary transition-colors"
          >
            {item}
          </Link>
        ) : (
          <span className="text-primary-foreground/50 cursor-not-allowed">
            {item}
          </span>
        )}
      </li>
    ))}
  </ul>
</div>


          {/* Information */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Careers", "Privacy Policy", "Terms & Conditions", "Store Locations"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary-foreground/70 hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Payment Methods</h4>
            <div className="grid grid-cols-3 gap-2">
              {["COD", "Card", "Bank"].map((method) => (
                <div key={method} className="bg-primary-foreground/10 rounded p-2 text-center text-xs font-medium">
                  {method}
                </div>
              ))}
            </div>
            <h4 className="font-semibold text-lg mt-6 mb-4">Download App</h4>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm" className="justify-start border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                App Store
              </Button>
              <Button variant="outline" size="sm" className="justify-start border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-primary-foreground/70">
          <p>© 2025 TechMart. All rights reserved. Built with ❤️ for Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
