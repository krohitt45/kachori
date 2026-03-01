import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { Plus, Minus, Trash2, ArrowLeft, CreditCard, Banknote } from "lucide-react";

const CartPage = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

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

        {/* Order Summary */}
        <div className="card-rustic rounded-xl p-4 space-y-3">
          <h3 className="font-display text-base text-foreground">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal ({totalItems} items)</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Packaging</span>
              <span>₹10</span>
            </div>
            <div className="border-t border-border pt-2 flex justify-between text-foreground font-bold">
              <span>Total</span>
              <span className="text-gold">₹{totalPrice + 10}</span>
            </div>
          </div>
        </div>

        {/* Pickup Info */}
        <div className="card-rustic rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground">
            <span className="text-foreground font-medium">Pickup Only</span> • No Delivery
          </p>
          <p className="text-[10px] text-muted-foreground mt-1">
            Fried 5–7 min before your arrival. Fresh & hot!
          </p>
        </div>

        {/* Payment Options */}
        <div className="card-rustic rounded-xl p-4 space-y-3">
          <h3 className="font-display text-base text-foreground">Payment Method</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 rounded-lg bg-secondary cursor-pointer border-2 border-primary">
              <input type="radio" name="payment" defaultChecked className="accent-[hsl(38,75%,50%)]" />
              <Banknote size={18} className="text-gold" />
              <div>
                <p className="text-sm text-foreground font-medium">Pay at Pickup</p>
                <p className="text-[10px] text-muted-foreground">Cash or UPI on arrival</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg bg-secondary cursor-pointer border-2 border-transparent">
              <input type="radio" name="payment" className="accent-[hsl(38,75%,50%)]" />
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
        <button className="w-full bg-gold-gradient text-primary-foreground font-bold py-4 rounded-2xl text-lg transition-transform active:scale-[0.98]">
          Place Order • ₹{totalPrice + 10}
        </button>
      </div>
    </div>
  );
};

export default CartPage;
