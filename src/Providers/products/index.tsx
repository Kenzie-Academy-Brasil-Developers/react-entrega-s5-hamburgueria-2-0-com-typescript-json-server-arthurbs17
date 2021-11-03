import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import api from "../../Services/api";

interface ProductsProviderData {
  getProducts: () => void;
  productsList: any;
}

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductTypeList {
  name: string;
  category: string;
  image: string;
  id: number;
  price: number;
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [productsList, setProductsList] = useState<ProductTypeList[]>(
    {} as ProductTypeList[]
  );

  const getProducts = () => {
    api
      .get("/products")
      .then((response) => {
        console.log(response.data);
        setProductsList(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ getProducts, productsList }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsList = () => useContext(ProductsContext);
