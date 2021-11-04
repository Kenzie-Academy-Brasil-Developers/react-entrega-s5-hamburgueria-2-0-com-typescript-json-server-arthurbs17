import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 80%;
  max-width: 400px;
  height: 80%;
  padding: 15px;
  background-color: var(--grey100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  border-radius: 5px;
  p {
    margin-top: 15px;
    font-size: 14px;
    text-align: left;
  }
  h1 {
    font-size: 26px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    font-family: "Roboto", sans-serif;
    margin-bottom: 10px;
  }
  button {
    width: 200px;
  }
`;
