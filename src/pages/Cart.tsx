import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Samsung Galaxy S24 Ultra 5G (12GB-256GB)",
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=200&h=200&fit=crop",
      price: 349999,
      quantity: 1,
    },
    {
      id: "2",
      name: "Sony WH-1000XM5 Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&h=200&fit=crop",
      price: 64999,
      quantity: 2,
    },
  ]);

  const [showCheckout, setShowCheckout] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showHomeBtn, setShowHomeBtn] = useState(false);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    toast.success("Item removed from cart");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 250 : 0;
  const total = subtotal + shipping;

  // Auto show "Back to Home" after 2s
  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => setShowHomeBtn(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCheckout(false);
    setShowThankYou(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Add some products to get started
            </p>
            <Link to="/products">
              <Button className="bg-secondary hover:bg-secondary/90">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-card border rounded-lg p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <p className="text-lg font-bold text-foreground mb-3">
                      Rs. {item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 border rounded">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>Rs. {shipping.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>Rs. {total.toLocaleString()}</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-secondary hover:bg-secondary/90 text-white mb-3"
                  onClick={() => setShowCheckout(true)}
                >
                  Proceed to Checkout
                </Button>
                <Link to="/products">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />

      {/* Checkout Form Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Checkout Form</h2>
            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border rounded p-2"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                placeholder="Address"
                required
                className="w-full border rounded p-2"
              />
              <Button type="submit" className="w-full bg-secondary text-white">
                Place Order
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-4">🎉 Thank You!</h2>
            <p>Your order has been placed successfully.</p>
            {showHomeBtn && (
              <Button
                className="mt-4 w-full bg-secondary text-white"
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
