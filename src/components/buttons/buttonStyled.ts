import styled from "styled-components";

interface IButton {
  background: string;
  color: string;
  size?: string;
}

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 7px;
  row-gap: 10px;
`;
export const Button = styled.div<IButton>`
  width: ${({ size }) => (size ? "140px" : "60px")};
  height: 60px;
  background: ${({ background }) =>
    background === "grey" ? "#a6a6a6" : background === "orange" ? "#ff9501" : "#333"};
  color: ${({ color }) => (color === "black" ? "black" : "white")};
  border-radius: ${({ size }) => (size ? "34px" : "50%")};
  text-align: center;
  line-height: 60px;
  font-size: 1.5rem;
  cursor: pointer;
  user-select: none;

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    filter: brightness(90%);
  }
`;
