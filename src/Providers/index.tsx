import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { ProductsProvider } from "./products";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <ProductsProvider>
      <AuthProvider>{children}</AuthProvider>
    </ProductsProvider>
  );
};

export default Provider;
