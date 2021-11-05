import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router";
import api from "../../Services/api";
import jwt_decode from "jwt-decode";

interface AuthContextData {
  authToken: string;
  userId: string;
  signIn: (userData: SignInProps) => void;
  logOut: () => void;
}

interface SignInProps {
  userData: object;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface Decode {
  decode: object;
  sub: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );
  const [userId, setUserId] = useState<string>(
    () => localStorage.getItem("userId") || ""
  );

  const signIn = (userData: SignInProps) => {
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        setAuthToken(response.data.accessToken);
        const decode: Decode = jwt_decode(response.data.accessToken);
        console.log(decode);
        localStorage.setItem("userId", decode.sub);
        setUserId(decode.sub);
        console.log(response.data);
        console.log(userId);
        history.push("/home");
      })
      .catch((error) => console.log(error));
  };

  const logOut = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, signIn, logOut, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
