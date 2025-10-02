import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  const navigate = useNavigate();
  const [showThankYou, setShowThankYou] = useState(false);
  const [showHomeBtn, setShowHomeBtn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => setShowHomeBtn(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={0} />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {!showThankYou ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white border rounded-xl p-6 space-y-6 shadow"
          >
            {/* Contact Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <input
                type="email"
                placeholder="Email or phone number"
                required
                className="w-full border rounded p-2"
              />
            </div>

            {/* Delivery Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Delivery</h2>
              <select required className="w-full border rounded p-2 mb-3">
                <option value="">Select Country/Region</option>
                <option>Pakistan</option>
                <option>India</option>
                <option>USA</option>
              </select>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  placeholder="First Name (optional)"
                  className="border rounded p-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="border rounded p-2"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                required
                className="w-full border rounded p-2 mb-3"
              />
              <input
                type="text"
                placeholder="Apartment, suite (optional)"
                className="w-full border rounded p-2 mb-3"
              />
              <div className="grid grid-cols-3 gap-3 mb-3">
                <input
                  type="text"
                  placeholder="City"
                  required
                  className="border rounded p-2"
                />
                <input
                  type="text"
                  placeholder="Postal Code (optional)"
                  className="border rounded p-2"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  required
                  className="border rounded p-2"
                />
              </div>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                Save this information for next time
              </label>
            </div>

            {/* Shipping Method */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
              <label className="flex items-center gap-2 border rounded p-3">
                <input type="radio" name="shipping" defaultChecked /> Cash On
                Delivery
              </label>
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Payment</h2>
              <select required className="w-full border rounded p-2">
                <option value="">Select Payment Method</option>
                <option>PayFast</option>
                <option>Debit/Credit Card</option>
                <option>Wallet</option>
                <option>Bank Account</option>
              </select>
            </div>

            {/* Billing Address */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
              <label className="flex items-center gap-2 mb-2">
                <input type="checkbox" defaultChecked /> Same as shipping
                address
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Use a different billing address
              </label>
            </div>

            <Button type="submit" className="w-full bg-secondary text-white">
              Pay Now
            </Button>
          </form>
        ) : (
          // Thank You Popup
          <div className="flex justify-center items-center h-96">
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
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
