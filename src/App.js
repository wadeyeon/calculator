import Screen from './components/Screen';
import Button from './components/Button';

const buttonValues = [
  ['A/C', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

function App() {
  return (
    <>
      <div>
        <Screen value={0} />
        <div className='buttons'>
          {buttonValues.flat().map((button, index) => {
            return (
              <Button
                key={index}
                value={button}
                onClick={() => console.log(`${button} clicked!!`)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
