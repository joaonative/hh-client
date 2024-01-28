import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Constantes de ambiente
const API_BASE_URL =
  import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";
const GOOGLE_API_URL = "https://www.googleapis.com/oauth2/v3/userinfo";

// Props do contexto
interface AuthContextProps {
  isLoggedIn: boolean;
  login: (access_token: string, onLoginCallback?: () => void) => Promise<void>;
  logout: (onLogoutCallback?: () => void) => void;
  errors: string;
  userData: UserData | null;
}

// Props do provedor
interface AuthProviderProps {
  children: ReactNode;
}

// Dados do usuário logado
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
    const storedUserData = localStorage.getItem("user-data");
    return storedUserData ? JSON.parse(storedUserData) : null;
  });
  const [isLoggedIn, setLoggedIn] = useState<boolean>(() => {
    const existingToken = localStorage.getItem("token-acesso");
    return existingToken ? true : false;
  });

  const login = async (access_token: string, onLoginCallback?: () => void) => {
    try {
      const googleRes = await axios.get(GOOGLE_API_URL, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const { name, email, picture, given_name } = googleRes.data;
      setUserData((prevUserData) => ({
        ...prevUserData,
        name,
        email,
        picture,
        given_name,
      }));

      try {
        const res = await axios.post(`${API_BASE_URL}/users`, {
          name,
          email,
        });

        const existingToken = localStorage.getItem("token-acesso");

        if (!existingToken) {
          localStorage.setItem("token-acesso", res.data.token);
          setLoggedIn(true);
        }

        if (onLoginCallback) {
          onLoginCallback();
        }
      } catch (error) {
        setErrors("Login error with backend server");
      }
    } catch (err) {
      setErrors("Error communicating with the Google API");
    }
  };

  const logout = (onLogoutCallback?: () => void) => {
    localStorage.removeItem("token-acesso");
    localStorage.removeItem("user-data");
    setLoggedIn(false);

    if (onLogoutCallback) {
      onLogoutCallback();
    }
  };

  useEffect(() => {
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
    throw new Error("useAuth needs to be used inside an AuthProvider");
  }
  return context;
};
