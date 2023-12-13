import { useState } from "react";
import { Buttons } from "../buttons/Buttons";
import { buttonsData } from "../buttons/buttonsData";
import { Calc, CalcScreen } from "./appStyled";

function App() {
  const [result, setResult] = useState("0");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sign, setSign] = useState("");
  const [finish, setFinish] = useState(false);

  const digit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const action = ["÷", "×", "+", "-", "%"];

  const clear = () => {
    setNum1("");
    setNum2("");
    setSign("");
    setFinish(false);
  };

  const onClick = (value: string) => {
    if (value === "AC") {
      clear();
    }
    if (digit.includes(value)) {
      setNum1(num1 + value);
      setResult(num1);
    }
    if (action.includes(value)) {
      setSign(value);
      setResult(num1);
    }
    console.log(num1, num2, sign);
  };

  return (
    <>
      <Calc>
        <CalcScreen>
          <p>{result}</p>
        </CalcScreen>
        <Buttons buttons={buttonsData} onClick={onClick} />
      </Calc>
    </>
  );
}

export default App;
