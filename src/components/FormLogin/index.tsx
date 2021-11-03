import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useAuth } from "../../Providers/auth";
import { TextField } from "@mui/material";
import { ButtonLogin } from "../Button";

interface SignInProps {
  userData: object;
}

interface UserData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const handleLogin = (userData: SignInProps) => {
    signIn(userData);
    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <TextField
          label="Email"
          {...register("email")}
          size="small"
          margin="dense"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Senha"
          {...register("password")}
          size="small"
          margin="dense"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <ButtonLogin type="submit">Entrar</ButtonLogin>
      </form>
    </div>
  );
};

export default FormLogin;
