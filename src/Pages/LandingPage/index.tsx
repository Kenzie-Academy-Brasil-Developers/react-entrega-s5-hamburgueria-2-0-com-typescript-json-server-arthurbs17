import { useHistory } from "react-router";
import { ButtonLogin } from "../../components/Button";
import { Container, Content } from "./style";

const LandingPage = () => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <h1>
          Burguer <span> Kenzie</span>
        </h1>
        <p>
          Faça seu Login ou Registre-se conosco, para experimentar os melhores
          lanches.
        </p>
        <div>
          <ButtonLogin onClick={() => history.push("/login")}>
            Login
          </ButtonLogin>
          <ButtonLogin onClick={() => history.push("/register")}>
            Cadastra-se
          </ButtonLogin>
        </div>
      </Content>
    </Container>
  );
};

export default LandingPage;
