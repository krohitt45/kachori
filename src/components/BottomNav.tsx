import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Vision", path: "/vision" },
  { label: "Model", path: "/model" },
  { label: "Campus", path: "/campus" },
  { label: "Scale", path: "/scale" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="flex items-center justify-center gap-2 py-3 px-4 text-sm">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`px-3 py-1 rounded-full transition-all text-sm font-medium ${
            location.pathname === item.path
              ? "text-primary font-bold underline underline-offset-4"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
