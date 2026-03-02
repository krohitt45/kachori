import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

const PreBookButton = () => {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className={`w-full bg-gold-gradient text-primary-foreground font-bold rounded-2xl transition-all active:scale-[0.98] ${
        totalItems > 0 ? "py-3 text-base" : "py-4 text-lg"
      }`}
    >
      Order for Pickup
    </button>
  );
};

export default PreBookButton;
