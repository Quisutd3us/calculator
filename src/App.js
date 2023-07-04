import './App.css';
import freeCodeCampLogo from '../src/images/freecodecamp-logo.png'
import {useState} from "react";
import {evaluate} from 'mathjs'
// import components

import Button from "./components/Button";
import DisplayCalc from "./components/DisplayCalc";
import ClearCalc from "./components/Clear";

function App() {

  const [input, setInput] = useState('')

  let addInput = (value) => {
    setInput(input + value)
  }
  let clearDisplay = () => {
    setInput('')
  }

  let doCalc = () => {
    setInput(evaluate(input))
  }

  return (
      <div className="App">
        <div className={'logo-container'}>
          <img
              src={freeCodeCampLogo}
              className={'logo-img'}
              alt={'Logo FreeCodeCamp'}
          />
        </div>
        <div className={'calculator-container'}>
          <DisplayCalc input={input}></DisplayCalc>
          <div className={'row-calculator'}>
            <Button manageClick={addInput}>1</Button>
            <Button manageClick={addInput}>2</Button>
            <Button manageClick={addInput}>3</Button>
            <Button manageClick={addInput}>+</Button>
          </div>
          <div className={'row-calculator'}>
            <Button manageClick={addInput}>4</Button>
            <Button manageClick={addInput}>5</Button>
            <Button manageClick={addInput}>6</Button>
            <Button manageClick={addInput}>-</Button>
          </div>
          <div className={'row-calculator'}>
            <Button manageClick={addInput}>7</Button>
            <Button manageClick={addInput}>8</Button>
            <Button manageClick={addInput}>9</Button>
            <Button manageClick={addInput}>*</Button>
          </div>
          <div className={'row-calculator'}>
            <Button manageClick={doCalc}>=</Button>
            <Button manageClick={addInput}>0</Button>
            <Button manageClick={addInput}>.</Button>
            <Button manageClick={addInput}>/</Button>
          </div>
          <div className={'row-calculator'}>
            <ClearCalc
                manageClick={clearDisplay}
            >Clear
            </ClearCalc>
          </div>
        </div>
      </div>
  );
}

export default App;
