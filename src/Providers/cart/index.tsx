import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import api from "../../Services/api";
import { useAuth } from "../auth";

interface CartContextData {
  cart: any;
  addToCart: (product: ProductsData) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

interface ProductsData {
  name: string;
  category: string;
  price: number;
  image: string;
  userId: string;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState([]);
  const { authToken, userId } = useAuth();

  const getCart = () => {
    api
      .get(`/cart/${userId}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCart();
  }, []);

  const addToCart = ({ ...product }: ProductsData) => {
    api
      .post<ProductsData>(
        "/cart",
        {
          name: product.name,
          category: product.category,
          image: product.image,
          price: product.price,
          userId: product.userId,
        },
        { headers: { Authorization: `Bearer ${authToken}` } }
      )
      .then((response) => {
        console.log(response);
        console.log(product);
      })
      .catch((error) => {
        console.log(product);
        console.log(error);
      });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
