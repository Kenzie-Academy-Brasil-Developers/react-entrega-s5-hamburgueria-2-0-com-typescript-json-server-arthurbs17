import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router";
import api from "../../Services/api";

interface AuthContextData {
  authToken: string;
  signIn: (userData: SignInProps) => void;
  logOut: () => void;
}

interface SignInProps {
  userData: object;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const signIn = (userData: SignInProps) => {
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token);
        history.push("/");
      })
      .catch((error) => console.log(error));
  };

  const logOut = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
