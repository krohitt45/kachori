import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "./BottomNav";
import PreBookButton from "./PreBookButton";
import CartBar from "./CartBar";
import { useCart } from "@/contexts/CartContext";

interface PageShellProps {
  title: string;
  children: ReactNode;
  showBack?: boolean;
  previousPath?: string;
}

const PageShell = ({ title, children, showBack = true, previousPath }: PageShellProps) => {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const handleBack = () => {
    if (previousPath) {
      navigate(previousPath);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-texture flex flex-col w-full lg:max-w-4xl lg:mx-auto relative overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 pt-4 pb-2">
        {showBack && (
          <button onClick={handleBack} className="text-foreground">
            <ArrowLeft size={22} />
          </button>
        )}
        <h1 className="font-display text-xl text-foreground">{title}</h1>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 pb-4 overflow-y-auto">
        {children}
      </main>

      {/* Pre-Book + Nav */}
      <div className={`px-4 ${totalItems > 0 ? "pb-20" : "pb-4"}`}>
        <PreBookButton />
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

export default PageShell;
