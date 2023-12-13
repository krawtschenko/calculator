import { useState } from "react";
import { Buttons } from "../buttons/Buttons";
import { buttonsData } from "../buttons/buttonsData";
import { Calc, CalcScreen } from "./appStyled";
import iPhone from "../../img/iPhone.png";

function App() {
  const [total, setTotal] = useState("0");
  const [previous, setPrevious] = useState("");
  const [current, setCurrent] = useState("");
  const [action, setAction] = useState("");

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const actions = ["+", "-", "×", "÷"];

  const clearAll = () => {
    setTotal("0");
    setPrevious("");
    setCurrent("");
    setAction("");
  };

  const onClick = (value: string) => {
    if (value === "AC") {
      clearAll();
    }
    if (value === "%") {
      setTotal(String(+previous / 100));
      setPrevious("");
    }
    if (value === "±") {
      if (previous !== "" && current === "") {
        setPrevious(String(+previous * -1));
      }
      if (action !== "" && current !== "") {
        setCurrent(String(+current * -1));
      }
    }
    if (value === "=") {
      switch (action) {
        case "+":
          setTotal(String(+previous + +current));
          break;
        case "-":
          setTotal(String(+previous - +current));
          break;
        case "×":
          setTotal(String(+previous * +current));
          break;
        case "÷":
          setTotal(String(+previous / +current));
          break;
      }
      setPrevious("");
      setCurrent("");
      setAction("");
    }
    if (numbers.includes(value) && action === "") {
      if (previous.length < 8) {
        setPrevious((state) => state + value);
      }
    }
    if (actions.includes(value)) {
      setAction(value);
    }
    if (previous !== "" && action !== "" && numbers.includes(value)) {
      if (current.length < 8) {
        setCurrent((state) => state + value);
      }
    }
    if (current !== "" && action !== "" && actions.includes(value)) {
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
    }
  };

  const totalLimit = total.length < 8 ? total : total.slice(0, 7) + "..";

  return (
    <>
      <Calc>
        <img src={iPhone} alt="iPhone" />
        <CalcScreen>
          <p>{current || action || previous || totalLimit}</p>
        </CalcScreen>
        <Buttons buttons={buttonsData} onClick={onClick} />
      </Calc>
    </>
  );
}

export default App;
