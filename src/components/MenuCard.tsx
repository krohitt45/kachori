import { Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface MenuCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

const MenuCard = ({ id, name, price, image }: MenuCardProps) => {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find((i) => i.id === id);

  return (
    <div className="card-rustic rounded-xl p-3 flex flex-col items-center gap-2 transition-transform hover:scale-[1.02]">
      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <p className="text-xs text-center text-foreground font-medium leading-tight line-clamp-2 min-h-[2rem]">
        {name}
      </p>
      <div className="flex items-center justify-between w-full mt-auto">
        <span className="text-sm font-bold text-gold">₹{price}</span>
        {cartItem ? (
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => updateQuantity(id, cartItem.quantity - 1)}
              className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground active:scale-90 transition-transform"
            >
              <Minus size={14} />
            </button>
            <span className="text-sm font-bold text-foreground w-4 text-center">
              {cartItem.quantity}
            </span>
            <button
              onClick={() => updateQuantity(id, cartItem.quantity + 1)}
              className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground active:scale-90 transition-transform"
            >
              <Plus size={14} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => addItem({ id, name, price, image })}
            className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full active:scale-90 transition-transform"
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
