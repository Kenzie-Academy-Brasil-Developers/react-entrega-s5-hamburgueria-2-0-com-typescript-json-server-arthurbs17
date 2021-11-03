import { ReactNode, ButtonHTMLAttributes } from "react";
import { ContainerAdd, ContainerLogin } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const ButtonAdd = ({ children, ...rest }: ButtonProps) => {
  return <ContainerAdd {...rest}>{children}</ContainerAdd>;
};

export const ButtonLogin = ({ children, ...rest }: ButtonProps) => {
  return <ContainerLogin>{children}</ContainerLogin>;
};
