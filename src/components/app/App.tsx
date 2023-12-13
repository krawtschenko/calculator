import { useState } from "react";
import { Buttons } from "../buttons/Buttons";
import { buttonsData } from "../buttons/buttonsData";
import { Calc, CalcScreen } from "./appStyled";

function App() {
  const onClick = (value: string) => {};

  return (
    <>
      <Calc>
        <CalcScreen>
          <p>0</p>
        </CalcScreen>
        <Buttons buttons={buttonsData} onClick={onClick} />
      </Calc>
    </>
  );
}

export default App;
