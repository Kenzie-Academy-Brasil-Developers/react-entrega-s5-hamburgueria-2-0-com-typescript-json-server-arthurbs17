import { ReactNode } from "react";
import { ProductsProvider } from "./products";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default Provider;
