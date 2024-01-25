import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AtuhContext";
import Button from "./Button";

interface SimpleLoginButtonProps {
  name: string;
  primary?: boolean;
}

function SimpleLoginButton({ name, primary }: SimpleLoginButtonProps) {
  const { login, isLoggedIn } = useAuth();

  const navigate = useNavigate();

  const signIn = useGoogleLogin({
    onSuccess: async (response) => {
      login(response.access_token, () => {
        navigate("/home");
      });
    },
  });

  const handleLogin = () => {
    if (isLoggedIn) {
      navigate("/home");
    } else {
      signIn();
    }
  };

  return (
    <>
      <Button
        name={name}
        handleClick={handleLogin}
        primary={primary}
        secondary={!primary}
      />
    </>
  );
}

export default SimpleLoginButton;
