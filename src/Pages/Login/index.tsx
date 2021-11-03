import { Link } from "react-router-dom";
import FormLogin from "../../components/FormLogin";

const Login = () => {
  return (
    <div>
      <FormLogin />

      <p>
        Não tem conta? <Link to="/register">Crie aqui</Link>, para aproveitar os
        melhores lanches
      </p>
    </div>
  );
};

export default Login;
