import FormRegister from "../../components/FormRegister";
import { Link } from "react-router-dom";
import { Container, Content } from "./style";

const Register = () => {
  return (
    <Container>
      <Content>
        <h1>SignUp</h1>
        <FormRegister />
        <p>
          Já tem conta? <Link to="/login">Entre aqui</Link>, para aproveitar os
          melhores lanches
        </p>
      </Content>
    </Container>
  );
};

export default Register;
