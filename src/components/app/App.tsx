import { Buttons } from "../buttons/Buttons";
import { buttonsData } from "../buttons/buttonsData";
import { Calc, CalcScreen } from "./appStyled";

function App() {
  return (
    <>
      <Calc>
        <CalcScreen>
          <p>0</p>
        </CalcScreen>
        <Buttons buttons={buttonsData} />
      </Calc>
    </>
  );
}

export default App;
