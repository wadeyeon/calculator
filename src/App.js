import { useState } from 'react';
import Screen from './components/Screen';
import Button from './components/Button';
import { calculator, addNumber, addOperator } from './api/calculator';

function App() {
  const [value, setValue] = useState();

  const handleClick = (e) => {
    const buttonValue = e.target.innerHTML;

    if (buttonValue === '=') {
      setValue(calculator(value, operators));
    } else if (buttonValue === 'A/C') {
      setValue();
    } else if (operators.includes(buttonValue)) {
      setValue(addOperator(value, buttonValue));
    } else {
      setValue(addNumber(value, buttonValue));
    }
  };

  return (
    <>
      <div>
        <Screen value={value ?? '0'} />
        <div className='buttons'>
          {buttonValues.flat().map((button, index) => {
            return <Button key={index} value={button} onClick={handleClick} />;
          })}
        </div>
      </div>
    </>
  );
}

const buttonValues = [
  ['A/C', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

const operators = ['X', '-', '+', '/', '%'];

export default App;
