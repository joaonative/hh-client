import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AtuhContext";

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
      {primary ? (
        <button
          className="px-3 py-1 border text-darker bg-primary border-primary"
          onClick={handleLogin}
        >
          {name}
        </button>
      ) : (
        <button
          className="px-3 py-1 border border-off_white hover:bg-off_white hover:text-darker transition-colors duration-300"
          onClick={handleLogin}
        >
          {name}
        </button>
      )}
    </>
  );
}

export default SimpleLoginButton;
