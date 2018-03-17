import Big from 'big.js';

const operation = (num1, num2, operator) => {
  const x = Big(num1);
  const y = Big(num2);
  let result;

  switch (operator) {
    case '+':
      result = x.plus(y).toString();
      break;
    case '-':
      result = x.minus(y).toString();
      break;
    case '×':
      result = x.times(y).toString();
      break;
    case '÷':
      result = x.div(y).toString();
      break;
    case '%':
      result = x.mod(y).toString();
      break;
    default:
      throw new Error(`unknown operator [${operator}]`);
  }
  return result;
};

export default operation;