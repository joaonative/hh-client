import { Link, useLocation } from "react-router-dom";

interface ItemProps {
  name: string;
  icon: string;
  color: "primary" | "white";
  path: string;
  isOpen?: boolean;
}

function SideBarItem({ name, icon, color, path, isOpen }: ItemProps) {
  const location = useLocation();

  const isActive = location.pathname === path;

  const colorVariants = {
    primary: "text-primary",
    white: "text-white",
  };

  return (
    <Link to={path}>
      <span
        className={`flex gap-3 items-center justify-center px-4 py-2 rounded-xl hover:bg-background border ${
          isActive ? "border-background" : "border-darker"
        }`}
      >
        <img src={icon} alt={`${name} icon`} className="w-8 h-8" />

        {isOpen && (
          <h1 className={`${colorVariants[color]} w-32 text-base`}>{name}</h1>
        )}
      </span>
    </Link>
  );
}

export default SideBarItem;
