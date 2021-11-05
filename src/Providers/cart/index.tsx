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
  localCart: any;
  addToCart: (product: ProductsData) => void;
  removeFromCart: (productId: number) => void;
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
  id?: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductsData[]>([]);
  const [localCart, setLocalCart] = useState<ProductsData[]>([]);
  const { authToken } = useAuth();

  const getCart = () => {
    api
      .get<ProductsData[]>(`/cart`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setCart(response.data);
        console.log(`toke: ${authToken}`);
      })
      .catch((error) => {
        console.log(error);
        console.log(`toke: ${authToken}`);
      });
  };

  useEffect(() => {
    getCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localCart]);

  const addToCart = ({ ...product }: ProductsData) => {
    api
      .post<ProductsData[]>(
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
        setLocalCart([...localCart, product]);
        console.log(response);
        console.log(localCart);
        console.log(cart);
        console.log(product);
      })
      .catch((error) => {
        console.log(product);
        console.log(error);
      });
  };

  const removeFromCart = (productId: number) => {
    api
      .delete<ProductsData[]>(`/cart/${productId}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        console.log(response);
        setLocalCart(localCart.filter((product) => product.id !== productId));
      })
      .catch((error) => console.log(error, authToken, cart));
  };

  return (
    <CartContext.Provider
      value={{ cart, localCart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
