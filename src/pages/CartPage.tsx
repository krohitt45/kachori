import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { Plus, Minus, Trash2, ArrowLeft, CreditCard, Banknote } from "lucide-react";
import { useState } from "react";
import halftea1Img from "@/assets/halftea1.svg";
import jalebi1Img from "@/assets/jalebi1.svg";
import samosa1Img from "@/assets/samosa1.svg";
import kachori1Img from "@/assets/kachori1.svg";

const CartPage = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart, addItem } = useCart();
  const navigate = useNavigate();
  const [pickupTime, setPickupTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  if (totalItems === 0) {
    return (
      <div className="min-h-screen bg-texture flex flex-col w-full lg:max-w-4xl lg:mx-auto">
        <header className="flex items-center gap-3 px-4 pt-4 pb-2">
          <button onClick={() => navigate("/")} className="text-foreground">
            <ArrowLeft size={22} />
          </button>
          <h1 className="font-display text-xl text-foreground">Your Cart</h1>
        </header>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <p className="text-4xl mb-4">🛒</p>
            <p className="text-foreground font-display text-lg">Cart is Empty</p>
            <p className="text-muted-foreground text-sm mt-1">Add some delicious items!</p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 bg-gold-gradient text-primary-foreground font-bold px-8 py-3 rounded-2xl active:scale-95 transition-transform"
            >
              Browse Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-texture flex flex-col w-full lg:max-w-4xl lg:mx-auto">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 pt-4 pb-2">
        <button onClick={() => navigate("/")} className="text-foreground">
          <ArrowLeft size={22} />
        </button>
        <h1 className="font-display text-xl text-foreground">Your Cart</h1>
        <span className="ml-auto text-sm text-muted-foreground">{totalItems} items</span>
      </header>

      {/* Cart Items */}
      <main className="flex-1 px-4 py-4 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="card-rustic rounded-xl p-3 flex items-center gap-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground font-medium truncate">{item.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">₹{item.price} each</p>
              <p className="text-sm text-gold font-bold mt-1">₹{item.price * item.quantity}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground active:scale-90 transition-transform"
                >
                  <Minus size={14} />
                </button>
                <span className="text-sm font-bold text-foreground w-5 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground active:scale-90 transition-transform"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-destructive"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}

        {/* Add‑ons (suggested extras) */}
        <div className="card-rustic rounded-xl p-4 space-y-3">
          <h3 className="font-display text-base text-foreground">Add more?</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "half-tea", name: "Half Tea", price: 15, image: halftea1Img },
              { id: "jalebi", name: "Jalebi", price: 10, image: jalebi1Img },
              { id: "samosa", name: "Samosa", price: 15, image: samosa1Img },
              { id: "kachori", name: "Kachori", price: 15, image: kachori1Img },
            ].map((extra) => (
              <button
                key={extra.id}
                onClick={() =>
                  addItem({ id: extra.id, name: extra.name, price: extra.price, image: extra.image })
                }
                className="px-3 py-1 rounded-full bg-secondary text-foreground text-sm border border-border hover:bg-secondary/80 transition"
              >
                + {extra.name} ₹{extra.price}
              </button>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="card-rustic rounded-xl p-4 space-y-3">
          <h3 className="font-display text-base text-foreground">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal ({totalItems} items)</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="border-t border-border pt-2 flex justify-between text-foreground font-bold">
              <span>Total</span>
              <span className="text-gold">₹{totalPrice}</span>
            </div>
          </div>
        </div>

      
        {/* Customer Details */}
        <div className="card-rustic rounded-xl p-4 space-y-3">
          <h3 className="font-display text-base text-foreground">Your Details</h3>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground"
            />
            {/* time picker with label above */}
            <div className="space-y-1">
              <label className="text-foreground text-sm">Pickup time</label>
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground"
              />
            </div>
          </div>
          {error && (
            <p className="text-sm text-destructive mt-1">{error}</p>
          )}
        </div>

        {/* Payment Options */}
        <div className="card-rustic rounded-xl p-4 space-y-3">
          <h3 className="font-display text-base text-foreground">Payment Method</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 rounded-lg bg-secondary cursor-pointer border-2 border-primary">
              <input type="radio" name="payment" defaultChecked className="accent-[hsl(38,75%,50%)]" />
              <CreditCard size={18} className="text-gold" />
              <div>
                <p className="text-sm text-foreground font-medium">Pay Online</p>
                <p className="text-[10px] text-muted-foreground">UPI, Card, or Wallet</p>
              </div>
            </label>
          </div>
        </div>
      </main>

      {/* Place Order Button */}
      <div className="px-4 pb-6 pt-2">
        <button
          onClick={() => {
            // reset previous error on each click
            setError("");
            if (!name || !phone || !pickupTime) {
              // build professional message listing missing fields
              const missing: string[] = [];
              if (!name) missing.push("name");
              if (!phone) missing.push("phone number");
              if (!pickupTime) missing.push("pickup time");
              // format list with commas and 'and'
              let list = "";
              if (missing.length === 1) {
                list = missing[0];
              } else if (missing.length === 2) {
                list = `${missing[0]} and ${missing[1]}`;
              } else if (missing.length > 2) {
                list = missing.slice(0, -1).join(", ") + 
                      ", and " + missing[missing.length - 1];
              }
              setError(`Please enter your ${list} before proceeding.`);
              return;
            }
            const order = { name, phone, pickupTime, total: totalPrice, items };
            navigate("/payment", { state: order });
          }}
          className="w-full bg-gold-gradient text-primary-foreground font-bold py-4 rounded-2xl text-lg transition-transform active:scale-[0.98]"
        >
          Book for Pickup • ₹{totalPrice + 10}
        </button>
      </div>
    </div>
  );
};

export default CartPage;
