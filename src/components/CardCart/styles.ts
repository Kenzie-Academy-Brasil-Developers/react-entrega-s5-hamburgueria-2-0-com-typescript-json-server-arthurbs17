import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 100px;
  padding: 5px;
  margin: 10px;
  border: 2px solid var(--grey300);
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  p {
    font-size: 14px;
    color: var(--grey600);
  }
  button {
    width: 50px;
    background-color: var(--red1);
  }

  :hover {
    button {
      background-color: var(--green1);
      border-color: var(--green1);
      color: #fff;
    }
  }
`;
