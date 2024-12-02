import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import "./App.css";
import { useState } from "react";

function App() {
  
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === "<X") {
      let newVal = "";
      for (let i = 0; i < calVal.length - 1; i++) {
        newVal += calVal[i];
      }
      setCalVal(newVal);
    } else {
      const newVal = calVal + buttonText;
      setCalVal(newVal);
    }
    console.log(buttonText);
  };

  return (
    <div className="Calculator">
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
