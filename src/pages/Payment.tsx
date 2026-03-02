import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface OrderState {
  name: string;
  phone: string;
  pickupTime: string;
  total: number;
  items: Array<{ id: string; name: string; price: number; quantity: number }>;
}

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as OrderState | null;

  useEffect(() => {
    if (!state) {
      // if someone navigates directly, send back to cart
      navigate("/cart");
    }
  }, [state, navigate]);

  if (!state) return null;

  const [paymentStarted, setPaymentStarted] = useState(false);

  const handlePay = () => {
    // open UPI payment link (example) or any other gateway URL
    // replace pa, pn and other params with real values from your merchant account
    const upiUrl = `upi://pay?pa=merchant@upi&pn=KachoriKothi&am=${state.total}`;
    window.location.href = upiUrl;
    setPaymentStarted(true);
  };

  const handleConfirm = () => {
    // in real integration you'd verify transaction success on the server
    console.log("order paid", state);
    navigate("/confirmation", { state });
  };

  return (
    <div className="min-h-screen bg-texture flex flex-col w-full lg:max-w-4xl lg:mx-auto">
      <header className="flex items-center gap-3 px-4 pt-4 pb-2">
        <button onClick={() => navigate(-1)} className="text-foreground">
          Back
        </button>
        <h1 className="font-display text-xl text-foreground">Payment</h1>
      </header>
      <main className="flex-1 px-4 py-4 space-y-4">
        <div className="card-rustic rounded-xl p-4">
          <h2 className="font-display text-base text-foreground mb-2">Order Summary</h2>
          <p>Name: {state.name}</p>
          <p>Phone: {state.phone}</p>
          <p>Pickup: {state.pickupTime}</p>
          <p>Total: ₹{state.total}</p>
        </div>
        <button
          onClick={handlePay}
          className="w-full bg-gold-gradient text-primary-foreground font-bold py-3 rounded-2xl active:scale-95 transition-transform"
        >
          Proceed to Pay
        </button>
        {paymentStarted && (
          <button
            onClick={handleConfirm}
            className="w-full mt-3 bg-secondary text-primary-foreground font-bold py-3 rounded-2xl active:scale-95 transition-transform"
          >
            I have paid / Confirm
          </button>
        )}
      </main>
    </div>
  );
};

export default Payment;
