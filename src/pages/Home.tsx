import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Home = () => {
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    { name: "Mobiles & Tablets", icon: "📱", color: "bg-blue-100" },
    { name: "Electronics", icon: "⚡", color: "bg-yellow-100" },
    { name: "Appliances", icon: "🏠", color: "bg-green-100" },
    { name: "Fashion", icon: "👔", color: "bg-purple-100" },
    { name: "Home & Living", icon: "🛋️", color: "bg-pink-100" },
    { name: "Gaming", icon: "🎮", color: "bg-red-100" },
  ];

  const featuredProducts = [
    {
      id: "1",
      name: "Samsung Galaxy S24 Ultra 5G (12GB-256GB) Official Warranty",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop",
      price: 349999,
      originalPrice: 399999,
      rating: 4.8,
      reviews: 142,
      badge: "HOT"
    },
    {
      id: "2",
      name: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
      image: "https://images.unsplash.com/photo-1592286927505-382a2e6b9c92?w=500&h=500&fit=crop",
      price: 479999,
      originalPrice: 519999,
      rating: 4.9,
      reviews: 289,
      badge: "NEW"
    },
    {
      id: "3",
      name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop",
      price: 64999,
      originalPrice: 74999,
      rating: 4.7,
      reviews: 567,
    },
    {
      id: "4",
      name: "MacBook Pro 14-inch M3 Pro Chip 18GB RAM 512GB SSD",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
      price: 449999,
      originalPrice: 499999,
      rating: 4.9,
      reviews: 234,
      badge: "SALE"
    },
    {
      id: "5",
      name: "Dell XPS 15 Laptop Intel i7 16GB RAM 1TB SSD",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop",
      price: 289999,
      originalPrice: 329999,
      rating: 4.6,
      reviews: 178,
    },
    {
      id: "6",
      name: "Canon EOS R6 Mark II Mirrorless Camera Body",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
      price: 349999,
      originalPrice: 389999,
      rating: 4.8,
      reviews: 92,
    },
    {
      id: "7",
      name: "Samsung 65\" Neo QLED 4K Smart TV QN90C",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop",
      price: 279999,
      originalPrice: 319999,
      rating: 4.7,
      reviews: 445,
    },
    {
      id: "8",
      name: "PlayStation 5 Console with Extra Controller",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&h=500&fit=crop",
      price: 119999,
      originalPrice: 139999,
      rating: 4.9,
      reviews: 1234,
      badge: "HOT"
    },
  ];

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    toast.success("Product added to cart!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartCount} />

      <main className="flex-1">
        {/* Hero Banner */}
         <section className="w-full relative overflow-hidden">
      <div className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[700px]">
        <img
          src="/public/eatch.jpg"
          alt="Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay text / button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-orange-600 drop-shadow-lg text">
            Welcome to Telemart
          </h1>
          <p className="mt-4 text-lg md:text-xl text-whote/90">
            Best deals on electronics, fashion & more
          </p>
          <button className="mt-6 bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary/90">
            Shop Now
          </button>
        </div>
      </div>
    </section>

        {/* Categories */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className={`${category.color} rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="font-medium text-sm">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Flash Deals Banner */}
        <section className="container mx-auto px-4 py-6">
            {/* <img src="" alt=""/> */}
          <div className="bg-gradient-to-r from-destructive to-secondary rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-2">⚡ Flash Deals - Limited Time!</h2>
            <p className="text-lg mb-4">Up to 60% OFF on selected items</p>
            <Button size="lg" variant="secondary" className="bg-white text-destructive hover:bg-white/90">
              Buy Now
            </Button>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link to="/products">
              <Button variant="outline">
                View All
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        {/* Promotional Banners */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=400&fit=crop"
                alt="Mobile Sale"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Smartphones</h3>
                  <p className="text-lg mb-4">Up to 40% OFF</p>
                  <Button className="bg-secondary hover:bg-secondary/90">Shop Now</Button>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&h=400&fit=crop"
                alt="Laptops"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Laptops & PCs</h3>
                  <p className="text-lg mb-4">Best Prices Guaranteed</p>
                  <Button className="bg-secondary hover:bg-secondary/90">Explore</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
