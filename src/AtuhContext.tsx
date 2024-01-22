import axios from "axios";
import { createContext, useContext, useState, ReactNode } from "react";

//props do contexto
interface AuthContextProps {
  isLoggedIn: boolean;
  login: (access_token: string) => Promise<void>;
  logout: () => void;
  errors: string;
}

//props do provedor
interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [errors, setErrors] = useState("");

  const [isLoggedIn, setLoggedIn] = useState<boolean>(() => {
    //verifica se ja tem o token baseado no valor automaticamente devolve isLoggedIn como true
    const existingToken = localStorage.getItem("token-acesso");
    return existingToken ? true : false;
  });

  const login = async (access_token: string) => {
    try {
      //fazemos a chamada ao servidor do google para solicitarmos as informacoes privadas dos usuarios de forma autorizada
      const googleRes = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      //guardamos a resposta do google
      const { name, email } = googleRes.data;

      try {
        //chamamos o nosso servidor backend passando as mesmas informacoes pessoais que o google nos forneceu
        const res = await axios.post("http://localhost:8080/api/users", {
          name,
          email,
        });

        //verificamos se o usuario acessou o prompt de login mesmo ja logado e se sim abortamos
        const existingToken = localStorage.getItem("token-acesso");

        if (existingToken) {
          return;
        } else {
          localStorage.setItem("token-acesso", res.data.token);
        }

        //por fim definimos o estado LoggedIn para verdadeiro
        setLoggedIn(true);
      } catch (error) {
        setErrors("Login error with backend server");
      }
    } catch (err) {
      setErrors("Error communicating with the Google API");
    }
  };

  const logout = () => {
    //removemos o token do cliente e logo apos removemos o estado LoggedIn
    localStorage.removeItem("token-acesso");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, errors }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth needs to be used inside a AuthProvider");
  }
  return context;
};
