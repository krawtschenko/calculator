import { useState } from "react";
import { Buttons } from "../buttons/Buttons";
import { buttonsData } from "../buttons/buttonsData";
import { Calc, CalcScreen } from "./appStyled";
import iPhone from "../../img/iPhone.png";

function App() {
  const [previous, setPrevious] = useState("");
  const [current, setCurrent] = useState("");
  const [action, setAction] = useState("");

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const actions = ["+", "-", "×", "÷"];

  const clearAll = () => {
    setPrevious("");
    setCurrent("");
    setAction("");
  };

  const switchAction = (action: string) => {
    switch (action) {
      case "+":
        setPrevious(String(+previous + +current));
        break;
      case "-":
        setPrevious(String(+previous - +current));
        break;
      case "×":
        setPrevious(String(+previous * +current));
        break;
      case "÷":
        setPrevious(String(+previous / +current));
        break;
    }
    setCurrent("");
  };

  const onClick = (value: string) => {
    if (value === "AC") {
      clearAll();
    } else if (value === "%") {
      setPrevious(String(+previous / 100));
    } else if (value === "±") {
      if (previous !== "" && current === "") {
        setPrevious(String(+previous * -1));
      } else if (action !== "" && current !== "") {
        setCurrent(String(+current * -1));
      }
    } else if (value === "=") {
      switchAction(action);
    } else if (numbers.includes(value) && action === "") {
      if (previous.length < 8) {
        setPrevious((state) => state + value);
      }
    } else if (actions.includes(value)) {
      setAction(value);
    } else if (previous !== "" && action !== "" && numbers.includes(value)) {
      if (current.length < 8) {
        setCurrent((state) => state + value);
      }
    } else if (current !== "" && action !== "" && actions.includes(value)) {
      switchAction(action);
    }
  };

  const limit = previous.length < 8 ? previous : previous.slice(0, 8);

  return (
    <>
      <Calc>
        <img src={iPhone} alt="iPhone" />
        <CalcScreen>
          <p>{current || limit || "0"}</p>
        </CalcScreen>
        <Buttons buttons={buttonsData} onClick={onClick} />
      </Calc>
    </>
  );
}

export default App;
