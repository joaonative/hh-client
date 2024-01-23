import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

//props do contexto
interface AuthContextProps {
  isLoggedIn: boolean;
  login: (access_token: string) => Promise<void>;
  logout: () => void;
  errors: string;
  userData: UserData | null;
}

//props do provedor
interface AuthProviderProps {
  children: ReactNode;
}

//dados do usuario logado
interface UserData {
  name: string;
  given_name: string;
  email: string;
  picture: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [errors, setErrors] = useState("");

  const [userData, setUserData] = useState<UserData | null>(() => {
    // tentamos recuperar as informacoes do usuario ao iniciar a aplicacao
    const storedUserData = localStorage.getItem("user-data");
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

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
      const { name, email, picture, given_name } = googleRes.data;
      console.log(googleRes.data);
      setUserData((prevUserData) => ({
        ...prevUserData,
        name,
        email,
        picture,
        given_name,
      }));
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
    localStorage.removeItem("user-data");
    setLoggedIn(false);
  };

  useEffect(() => {
    //atualizamos as informacoes do usuario localmente
    localStorage.setItem("user-data", JSON.stringify(userData));
  }, [userData]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, errors, userData }}
    >
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
