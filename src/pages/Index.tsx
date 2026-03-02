import MenuCard from "@/components/MenuCard";
import BottomNav from "@/components/BottomNav";
import CartBar from "@/components/CartBar";
import { useCart } from "@/contexts/CartContext";

import heroImg from "@/assets/hero.png";
import kachoriImg from "@/assets/kachori.png";
import samosaImg from "@/assets/samosa.png";
import puriImg from "@/assets/puri.png";
import teaImg from "@/assets/tea.png";
import bunmaskaImg from "@/assets/bunmaska.png";

const menuItems = [
  { id: "1", name: "2 Kachori With Sabji/Chola", price: 40, image: kachoriImg },
  { id: "2", name: "2 Samosa With Sabji/Chola", price: 40, image: samosaImg },
  { id: "3", name: "5 Puri With Sabji & Jalebi", price: 60, image: puriImg },
  { id: "4", name: "4 Puri With Sabji/Chola", price: 40, image: puriImg },
  { id: "5", name: "1 Full Kulhad Tea", price: 25, image: teaImg },
  { id: "6", name: "1 Bun Maska With Tea", price: 40, image: bunmaskaImg },
];

const Index = () => {
  const { totalItems } = useCart();

  return (
    <div className="min-h-screen bg-texture flex flex-col w-full relative overflow-x-hidden">
      {/* Hero */}
      <div className="relative">
        <img
          src={heroImg}
          alt="Fresh Kachori"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        {/* Top-left header */}
        <div className="absolute top-2 left-2">
          <div className="flex items-center gap-1">
            <img src="/logo.png" alt="Kachori Kothi logo" className="w-8 h-8 object-contain" />
            <h1 className="font-display text-sm md:text-base text-foreground font-bold">Kachori Kothi</h1>
          </div>
        </div>
        {/* Middle tagline */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <p className="text-foreground font-display text-lg leading-tight">
            Fresh Kachori. {" "}
            <span className="text-gold font-bold">Smart Pickup.</span>
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            Quick, affordable meals for students.
          </p>
        </div>
      </div>

      {/* Menu */}
      <section className="px-4 py-4 flex-1">
        <h2 className="font-display text-lg text-foreground mb-3">Popular Combos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {menuItems.map((item) => (
            <MenuCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* Info strip */}
      <div className="mx-4 card-rustic rounded-xl px-4 py-3 text-center mb-4">
        <p className="text-xs text-muted-foreground">
          <span className="text-foreground font-medium">No Delivery</span> • Pickup Only
        </p>
        <p className="text-[10px] text-muted-foreground mt-1">
          Fried 5–7 min before your arrival.
        </p>
      </div>

      {/* Nav + footer */}
      <div className={`px-4 ${totalItems > 0 ? "pb-20" : "pb-4"}`}>
        <BottomNav />
        <p className="text-center text-[10px] text-muted-foreground mt-2">
          © 2024 Kachori Kothi. All rights reserved.
        </p>
      </div>

      {/* Cart overlay */}
      <CartBar />
    </div>
  );
};

export default Index;
