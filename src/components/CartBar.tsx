import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CartBar = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart();
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      {expanded && (
        <div className="bg-card border-t border-border mx-auto w-full rounded-t-2xl p-4 shadow-warm max-h-60 overflow-y-auto">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-display text-lg text-foreground">Your Cart</h3>
            <button onClick={() => setExpanded(false)} className="text-muted-foreground">
              <X size={20} />
            </button>
          </div>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div className="flex-1">
                <p className="text-sm text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">₹{item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground"
                >
                  <Minus size={14} />
                </button>
                <span className="text-sm text-foreground w-5 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="bg-card border-t border-border mx-auto w-full flex items-center gap-3 px-4 py-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 flex-1"
        >
          <div className="relative">
            <ShoppingCart size={22} className="text-primary" />
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <span className="text-sm text-foreground font-medium">₹{totalPrice}</span>
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="bg-gold-gradient text-primary-foreground font-bold text-sm px-5 py-2.5 rounded-xl transition-transform active:scale-95"
        >
          View Cart
        </button>
      </div>
    </div>
  );
};

export default CartBar;
