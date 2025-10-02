import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Products = () => {
  const [cartCount, setCartCount] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 500000]);

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: String(i + 1),
    name: `Product ${i + 1} - High Quality ${["Smartphone", "Laptop", "Headphones", "Camera"][i % 4]}`,
    image: `https://images.unsplash.com/photo-${1610945415295 + i}?w=500&h=500&fit=crop`,
    price: Math.floor(Math.random() * 400000) + 50000,
    originalPrice: Math.floor(Math.random() * 500000) + 100000,
    rating: 4.5 + Math.random() * 0.4,
    reviews: Math.floor(Math.random() * 1000) + 50,
    badge: i % 3 === 0 ? ["HOT", "NEW", "SALE"][i % 3] : undefined,
  }));

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    toast.success("Product added to cart!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartCount} />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-muted-foreground">
          <span>Home</span> / <span className="text-foreground">All Products</span>
        </nav>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-lg border p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Filters</h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Categories</h4>
                <div className="space-y-2">
                  {["Mobiles", "Laptops", "Electronics", "Appliances", "Fashion"].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox />
                      <span className="text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Price Range</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={500000}
                  step={10000}
                  className="mb-3"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Rs. {priceRange[0].toLocaleString()}</span>
                  <span>Rs. {priceRange[1].toLocaleString()}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox />
                      <span className="text-sm">{rating}★ & above</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-secondary hover:bg-secondary/90">
                Apply Filters
              </Button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort & Results */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{products.length}</span> results
              </p>
              <Select defaultValue="popular">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              <Button variant="outline" disabled>Previous</Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  className={page === 1 ? "bg-secondary hover:bg-secondary/90" : ""}
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
