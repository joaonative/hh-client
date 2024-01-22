import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../AtuhContext";

function Home() {
  const { isLoggedIn, login, logout } = useAuth();

  const loginGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      //passamos o token para o contexto se comunicar com o google de forma permitida como a resposta da biblioteca @react-oauth/google que definimos em main.tsx juntamente com nosso clientId do google
      login(response.access_token);
    },
  });

  return (
    <>
      <button onClick={() => loginGoogle()} className="p-2 bg-green-500">
        Google login
      </button>

      {isLoggedIn ? (
        <>
          <h1>Logado</h1>
          <button onClick={() => logout()} className="p-2 bg-green-500">
            Sair
          </button>
        </>
      ) : (
        <h2>Deslogado</h2>
      )}
    </>
  );
}

export default Home;
