import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  text-align: center;
  height: 90vh;
  @media screen and (min-width: 768px) {
    background-color: #fff;
  }
`;

export const Content = styled.div`
  max-width: 320px;
  h1 {
    color: #000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    font-family: "Roboto", sans-serif;
    font-size: 1.7rem;
    span {
      color: var(--red1);
      font-size: 14px;
    }
  }
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    button + button {
      margin-top: 20px;
    }
  }
  p {
    margin-bottom: 2rem;
    margin-top: 1.5rem;
    color: var(--red1);
  }
  @media screen and (min-width: 768px) {
    max-width: 400px;
    h1 {
      font-size: 2rem;
    }
    div {
      flex-direction: row;
      button + button {
        margin-left: 20px;
      }
    }
  }
`;
