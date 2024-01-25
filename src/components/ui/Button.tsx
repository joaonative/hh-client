interface ButtonProps {
  handleClick: () => void;
  name?: string;
  styleClass?: string;
  secondary?: boolean;
  danger?: boolean;
  primary?: boolean;
}

function Button({
  handleClick,
  name,
  styleClass,
  danger,
  secondary,
  primary,
}: ButtonProps) {
  return (
    <button
      className={`transition-color duration-300 border uppercase px-3 py-1 text-base ${
        danger &&
        "border-red-500 text-red-500 bg-transparent hover:text-off_white hover:bg-red-500"
      } ${
        secondary &&
        "border-off_white text-off_white bg-transparent hover:bg-off_white hover:text-darker"
      } 
       ${primary && "border-darker text-darker bg-primary hover:bg-h_primary"}
      ${styleClass}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default Button;
