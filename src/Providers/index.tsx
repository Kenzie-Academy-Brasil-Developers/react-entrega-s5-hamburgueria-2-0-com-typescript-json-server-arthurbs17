import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { CartProvider } from "./cart";
import { ProductsProvider } from "./products";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <ProductsProvider>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </ProductsProvider>
  );
};

export default Provider;
