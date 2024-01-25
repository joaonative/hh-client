import { useNavigate } from "react-router-dom";
import Button from "./Button";

interface NavigationButtonProps {
  path: string;
  name: string;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
}

function NavigationButton({
  path,
  name,
  primary,
  secondary,
  danger,
}: NavigationButtonProps) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <Button
      handleClick={handleNavigate}
      name={name}
      primary={primary}
      secondary={secondary}
      danger={danger}
    />
  );
}

export default NavigationButton;
