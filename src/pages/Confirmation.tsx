import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state, navigate]);

  return (
    <div className="min-h-screen bg-texture flex flex-col w-full lg:max-w-4xl lg:mx-auto items-center justify-center">
      <h1 className="font-display text-2xl text-foreground mb-4">Thank you!</h1>
      <p className="text-foreground">Your order has been booked for pickup.</p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-gold-gradient text-primary-foreground font-bold px-6 py-3 rounded-2xl active:scale-95 transition-transform"
      >
        Back to Menu
      </button>
    </div>
  );
};

export default Confirmation;
