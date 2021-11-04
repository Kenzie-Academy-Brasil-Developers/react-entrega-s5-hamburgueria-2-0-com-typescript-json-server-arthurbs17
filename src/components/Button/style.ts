import styled from "styled-components";

export const ContainerAdd = styled.button`
  background: var(--grey300);
  color: var(--grey100);
  height: 35px;
  border: 2px solid var(--grey300);
  border-radius: 5px;
  width: 100px;
  transition: 0.5s;
  margin-top: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
`;

export const ContainerLogin = styled.button`
  background: var(--green1);
  color: #fff;
  height: 35px;
  border: 2px solid var(--green1);
  border-radius: 5px;
  width: 100%;
  transition: 0.5s;
  margin-top: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  :hover {
    border-color: var(--information);
    color: var(--information);
  }
`;
