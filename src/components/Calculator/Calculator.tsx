import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [value, setValue] = useState("0");
  const [prevValue, setPrevValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (num: string) => {
    // logic for handling number input
    if (value === "0") {
      setValue(num);
    } else {
      setValue(value + num);
    }
  };

  const handleOperatorClick = (op: string) => {
    // logic for handling operator input
    setPrevValue(value);
    setValue("0");
    setOperator(op);
  };

  const handleEqualClick = () => {
    // logic for handling equal button click
    let result;
    switch (operator) {
      case "+":
        result = Number(prevValue) + Number(value);
        break;
      case "-":
        result = Number(prevValue) - Number(value);
        break;
      case "*":
        result = Number(prevValue) * Number(value);
        break;
      case "/":
        result = Number(prevValue) / Number(value);
        break;
      default:
        result = Number(value);
    }
    setValue(result.toString());
    setPrevValue("");
    setOperator("");
  };

  const handleClearClick = () => {
    // logic for handling clear button click
    setValue("0");
    setPrevValue("");
    setOperator("");
  };

  return (
    <div>
      {/* <h2>Calculator</h2> */}
      <div className="calculator">
        <div className="display bg-bieze">{value}</div>
        <div className="row">
          <button className="button" onClick={() => handleClearClick()}>
            AC
          </button>
          <button className="button" onClick={() => handleOperatorClick("/")}>
            ÷
          </button>
          <button className="button" onClick={() => handleOperatorClick("*")}>
            ×
          </button>
        </div>
        <div className="row">
          <button className="button" onClick={() => handleNumberClick("7")}>
            7
          </button>
          <button className="button" onClick={() => handleNumberClick("8")}>
            8
          </button>
          <button className="button" onClick={() => handleNumberClick("9")}>
            9
          </button>
          <button className="button" onClick={() => handleOperatorClick("-")}>
            -
          </button>
        </div>
        <div className="row">
          <button className="button" onClick={() => handleNumberClick("4")}>
            4
          </button>
          <button className="button" onClick={() => handleNumberClick("5")}>
            5
          </button>
          <button className="button" onClick={() => handleNumberClick("6")}>
            6
          </button>
          <button className="button" onClick={() => handleOperatorClick("+")}>
            +
          </button>
        </div>
        <div className="row">
          <button className="button" onClick={() => handleNumberClick("1")}>
            1
          </button>
          <button className="button" onClick={() => handleNumberClick("2")}>
            2
          </button>
          <button className="button" onClick={() => handleNumberClick("3")}>
            3
          </button>
          <button className="button" onClick={() => handleEqualClick()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
