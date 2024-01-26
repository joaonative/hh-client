interface ButtonProps {
  handleClick: () => void;
  name?: string;
  styleClass?: string;
  secondary?: boolean;
  danger?: boolean;
  primary?: boolean;
  full?: boolean;
  close?: boolean;
}

function Button({
  handleClick,
  name,
  styleClass,
  danger,
  secondary,
  primary,
  full,
  close,
}: ButtonProps) {
  return (
    <button
      className={`transition-color duration-300 border px-4 py-2 text-base rounded-lg capitalize ${
        danger &&
        "border-red-500 text-red-500 bg-transparent hover:text-off_white hover:bg-red-500"
      } ${
        secondary &&
        "border-off_white text-off_white bg-transparent hover:bg-off_white hover:text-darker"
      } 
       ${
         primary &&
         "border-primary text-off_white bg-primary hover:bg-h_primary"
       } ${full && "w-full"}
       ${close && "border-none text-background text-xl"} 
      ${styleClass}`}
      onClick={handleClick}
    >
      {close && <img src="close.svg" className="h-5" />} {name}
    </button>
  );
}

export default Button;
