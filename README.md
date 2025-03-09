# Calculator

리액트로 만든 간단한 계산기

# Build with:

- ReactJS
- PostCSS

# Features:

- state 관리
- 이벤트 핸들링
- 조건부 렌더링
- 리스트 렌더링

## 기억하고 싶은 코드

### 리스트 렌더링

계산기의 많은 버튼을 일일히 입력하지 않고 `map()`을 이용해 렌더링했다.

```jsx
function App() {
  return (
    <>
      <div>
        <div>0</div>
        <div>
          {buttonValues.flat().map((button, index) => {
            return <button key={index}>{button}</button>;
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

export default App;
```

<br>

### components

화면에 보여지는 부분(`<Screen />`)과 반복되는 버튼(`<Button />`)을 컴포넌트로 만들어 구성했다.

```jsx
import Screen from './components/Screen';
import Button from './components/Button';

function App() {
  return (
    <>
      <div>
        <Screen value='0' />
        <div>
          {buttonValues.flat().map((button, index) => {
            return <Button key={index} value={button} onClick={handleClick} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
```

<br>

### state

계산기 버튼을 클릭하면 화면에 보여지는 값을 state로 관리했다.

```jsx
import { useState } from 'react';

function App() {
  const [value, setValue] = useState();

  // 이벤트 핸들링
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
        <Screen value={value ?? '0'} /> <!-- 조건부 렌더링 -->
        <div>
          {buttonValues.flat().map((button, index) => {
            return (
              <Button
                key={index}
                value={button}
                onClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

```

## Application screen shots:

![screenshot](https://github.com/user-attachments/assets/ac6eaa45-6dc2-4d6b-905a-ecb2f68c7c9f)
