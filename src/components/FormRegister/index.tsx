import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { TextField } from "@mui/material";
import api from "../../Services/api";
import { ButtonLogin } from "../Button/index";

interface handleRegisterProps {
  email: string;
  password: string;
  firstname: string;
}

interface UserData {
  email: string;
  firstname: string;
  password: string;
  passwordConfirmation: string;
}

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const handleRegister = ({
    email,
    password,
    firstname,
  }: handleRegisterProps) => {
    api
      .post("/register", { email, password, firstname })
      .then((response) => console.log(response));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <TextField
          label="Email"
          {...register("email")}
          size="small"
          margin="dense"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Nome"
          {...register("firstname")}
          size="small"
          margin="dense"
          error={!!errors.firstname}
          helperText={errors.firstname?.message}
        />
        <TextField
          label="Senha"
          {...register("password")}
          size="small"
          margin="dense"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          label="Confirme a Senha"
          {...register("passwordConfirmation")}
          size="small"
          margin="dense"
          error={!!errors.passwordConfirmation}
          helperText={errors.passwordConfirmation?.message}
        />
        <ButtonLogin type="submit">Entrar</ButtonLogin>
      </form>
    </div>
  );
};

export default FormRegister;
