import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background-color: var(--grey100);
  z-index: 1100;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  justify-content: space-around;
  color: var(--grey600);
`;

export const ButtonNav = styled.button`
  width: 150px;
  height: 50px;
  background-color: var(--grey100);
  color: #000;
  border: none;
  font-size: 24px;
  cursor: pointer;
  span {
    color: var(--red1);
    font-size: 14px;
  }
`;
