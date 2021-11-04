import { Link } from "react-router-dom";
import FormLogin from "../../components/FormLogin";

import { Container, Content } from "./style";

const Login = () => {
  return (
    <Container>
      <Content>
        <h1>Login</h1>
        <FormLogin />
        <p>
          Não tem conta? <Link to="/register">Crie aqui</Link>, para aproveitar
          os melhores lanches
        </p>
      </Content>
    </Container>
  );
};

export default Login;
