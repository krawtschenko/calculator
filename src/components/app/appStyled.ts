import styled from "styled-components";

export const Calc = styled.div`
  margin: 50px auto;
  padding: 18px;
  width: 300px;
  height: 500px;
  border-radius: 20px;
  background: black;
  color: white;
  box-shadow: 4px 4px 4px #4f4f4f;
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
  }
`;
