import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 250px;
  padding: 5px;
  margin: 10px;
  border: 2px solid var(--grey300);
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  img {
    width: 120px;
    height: 120px;
    border-radius: 5px;
  }
  span {
    font-size: 12px;
    color: var(--grey300);
  }
  p {
    font-size: 14px;
    color: var(--green1);
  }

  :hover {
    border-color: var(--green1);
    button {
      background-color: var(--green1);
      border-color: var(--green1);
      color: #fff;
    }
  }
`;
