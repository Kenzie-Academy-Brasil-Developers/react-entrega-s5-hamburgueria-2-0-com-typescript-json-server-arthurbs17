import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ContainerCard = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  height: 90%;
  max-width: 800px;
  span {
    font-size: 20px;
    margin-top: 10px;
  }
`;
