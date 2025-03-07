export function addNumber(value, buttonValue) {
  if (value) {
    if (buttonValue !== '.' && value.slice(-2) === ' 0') {
      return value.slice(0, -1) + buttonValue;
    } else {
      return value + buttonValue;
    }
  } else {
    return buttonValue;
  }
}

export function addOperator(value, buttonValue) {
  if (value) {
    return `${value} ${buttonValue} `;
  } else {
    return `0 ${buttonValue} `;
  }
}

export function calculator(valueString, operators) {
  let result = 0;
  let oper = '';
  const valueArr = convertValueToArray(valueString);

  valueArr.forEach((value) => {
    if (operators.includes(value)) {
      oper = value;
    } else if (oper && result) {
      result = calc(oper, result, value);
    } else {
      result = parseFloat(value);
    }
  });
  return result.toString();
}

function calc(oper, result, value) {
  if (oper === '+') {
    return result + parseFloat(value);
  } else if (oper === '-') {
    return result - parseFloat(value);
  } else if (oper === 'X') {
    return result * parseFloat(value);
  } else if (oper === '/') {
    return result / parseFloat(value);
  } else if (oper === '%') {
    return result % parseFloat(value);
  } else {
    throw new Error('unknown oper');
  }
}

function convertValueToArray(valueString) {
  const arr = valueString.split(' ');
  if (!arr[arr.length - 1]) arr.splice(-2);
  return arr;
}
