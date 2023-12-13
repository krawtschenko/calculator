import styled from "styled-components";

export const Calc = styled.div`
  position: relative;
  margin: 150px auto;
  padding: 18px;
  width: 300px;
  height: 500px;
  border-radius: 20px;
  background: black;
  color: white;
  z-index: 1;

  img {
    position: absolute;
    bottom: -60px;
    left: -8px;
    width: 350px;
    z-index: -1;
  }
`;

export const CalcScreen = styled.div`
  height: 125px;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  justify-content: end;
  align-items: end;

  p {
    text-align: right;
    font-size: 4rem;
    margin: 0;
    user-select: none;
  }
`;
