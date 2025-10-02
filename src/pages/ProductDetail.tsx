import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RefreshCw } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const [cartCount, setCartCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: id || "1",
    name: "Samsung Galaxy S24 Ultra 5G (12GB-256GB) Official Warranty PTA Approved",
    price: 349999,
    originalPrice: 399999,
    rating: 4.8,
    reviews: 142,
    inStock: true,
    brand: "Samsung",
    category: "Mobiles & Tablets",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592286927505-382a2e6b9c92?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=800&fit=crop",
    ],
    description: "Experience the ultimate flagship smartphone with the Samsung Galaxy S24 Ultra. Featuring a stunning 6.8-inch Dynamic AMOLED display, powerful Snapdragon 8 Gen 3 processor, and revolutionary AI-powered camera system. Perfect for professionals and tech enthusiasts.",
    features: [
      "6.8-inch Dynamic AMOLED 2X Display, 120Hz",
      "Snapdragon 8 Gen 3 Processor",
      "12GB RAM, 256GB Internal Storage",
      "200MP Main + 12MP Ultra Wide + 10MP Telephoto",
      "5000mAh Battery with 45W Fast Charging",
      "S Pen Included",
      "IP68 Water & Dust Resistant",
      "Official Warranty & PTA Approved"
    ],
    specifications: {
      Display: "6.8\" Dynamic AMOLED 2X, 120Hz",
      Processor: "Snapdragon 8 Gen 3",
      RAM: "12GB",
      Storage: "256GB",
      Camera: "200MP + 12MP + 10MP",
      Battery: "5000mAh",
      OS: "Android 14, One UI 6"
    }
  };

  const relatedProducts = Array.from({ length: 4 }, (_, i) => ({
    id: String(i + 10),
    name: `Related Product ${i + 1}`,
    image: `https://images.unsplash.com/photo-${1610945415295 + i}?w=500&h=500&fit=crop`,
    price: Math.floor(Math.random() * 400000) + 50000,
    originalPrice: Math.floor(Math.random() * 500000) + 100000,
    rating: 4.5 + Math.random() * 0.4,
    reviews: Math.floor(Math.random() * 1000) + 50,
  }));

  const handleAddToCart = () => {
    setCartCount(prev => prev + quantity);
    toast.success(`${quantity} item(s) added to cart!`);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartCount} />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-muted-foreground">
          <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden border bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? "border-secondary" : "border-transparent"
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full aspect-square object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Badge className="bg-accent text-accent-foreground mb-2">{product.brand}</Badge>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="flex items-center bg-accent text-accent-foreground text-sm px-2 py-1 rounded">
                    <span className="font-semibold">{product.rating}</span>
                    <Star className="h-4 w-4 ml-1 fill-current" />
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                {product.inStock && (
                  <Badge variant="outline" className="text-accent border-accent">In Stock</Badge>
                )}
              </div>
            </div>

            {/* Price */}
            <div className="bg-muted rounded-lg p-4 mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-foreground">
                  Rs. {product.price.toLocaleString()}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
                <Badge className="bg-destructive text-destructive-foreground">
                  Save {discount}%
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="font-semibold mb-2 block">Quantity:</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-6">
              <Button
                size="lg"
                className="flex-1 bg-secondary hover:bg-secondary/90 text-white"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted rounded-lg">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-secondary" />
                <p className="text-xs font-medium">Free Delivery</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-secondary" />
                <p className="text-xs font-medium">Official Warranty</p>
              </div>
              <div className="text-center">
                <RefreshCw className="h-6 w-6 mx-auto mb-2 text-secondary" />
                <p className="text-xs font-medium">7 Days Return</p>
              </div>
            </div>

            {/* Description */}
            <div className="border-t pt-6">
              <h3 className="font-bold text-lg mb-3">Product Description</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <div className="bg-card border rounded-lg overflow-hidden">
            {Object.entries(product.specifications).map(([key, value], idx) => (
              <div
                key={key}
                className={`grid grid-cols-3 p-4 ${idx % 2 === 0 ? "bg-muted/50" : ""}`}
              >
                <span className="font-semibold">{key}</span>
                <span className="col-span-2 text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
