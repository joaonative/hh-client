import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../AtuhContext";
import { useState } from "react";
import Dialog from "./Dialog";

interface LoginBtnProps {
  name: string;
  icon: string;
  isOpen?: boolean;
}

function LoginButton({ name, icon, isOpen }: LoginBtnProps) {
  const { isLoggedIn, login, logout, userData } = useAuth();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const formattedName = userData?.given_name
    ? userData.given_name.charAt(0).toUpperCase() +
      userData.given_name.slice(1).toLowerCase()
    : "";

  const loginGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      //passamos o token para o contexto se comunicar com o google de forma permitida como a resposta da biblioteca @react-oauth/google que definimos em main.tsx juntamente com nosso clientId do google
      login(response.access_token);
    },
  });

  const handleConfirm = () => {
    logout();
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      {isLoggedIn && userData ? (
        <>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="flex gap-3 items-center justify-center px-4 py-2 rounded-xl hover:bg-background border border-darker transition-all duration-300"
          >
            <img
              src={userData?.picture}
              alt={`User picture`}
              className="md:w-8 md:h-8 w-6 rounded-full transition-all duration-300"
            />
            {isOpen && (
              <h1 className={`md:w-36 w-28 text-base text-start capitalize`}>
                {formattedName}
              </h1>
            )}
          </button>
        </>
      ) : (
        <button
          onClick={() => loginGoogle()}
          className="flex gap-3 items-center justify-center px-4 py-2 rounded-xl hover:bg-background border border-darker transition-all duration-300"
        >
          <img src={icon} alt={`${name} icon`} className="w-10 md:w-8" />
          {isOpen && (
            <h1 className={`md:w-36 w-40 text-base text-start`}>{name}</h1>
          )}
        </button>
      )}
      {isDialogOpen && (
        <Dialog
          message="Are you sure you want to log out?"
          confirmMessage="Log out"
          cancelMessage="Cancel"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}

export default LoginButton;
