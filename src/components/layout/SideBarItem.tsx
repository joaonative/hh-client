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
    white: "text-off_white",
  };

  return (
    <Link to={path}>
      <span
        className={`flex gap-3 items-center justify-center px-4 py-2 rounded-xl hover:bg-background border transition-all duration-300 ${
          isActive ? "border-background" : "border-darker"
        }`}
      >
        <img
          src={icon}
          alt={`${name} icon`}
          className="lg:w-8 lg:h-8 w-10 transition-all duration-300"
        />

        {isOpen && (
          <h1 className={`${colorVariants[color]} lg:w-36 w-40 text-base`}>
            {name}
          </h1>
        )}
      </span>
    </Link>
  );
}

export default SideBarItem;
