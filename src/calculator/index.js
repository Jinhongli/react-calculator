import operation from './operation';

const calculator = (prevState, button) => {
  let state;
  switch (button) {
    case 'AC':
      state = {
        total: null,
        next: null,
        operator: null,
      };
      break;

    case 'DEL':
      if (prevState.next) {
        state = {
          next: prevState.next.slice(0, -1),
        };
      } else {
        state = {
          total: null,
          next: null,
          operator: null,
        };
      }
      break;

    case '+/-':
      state = {
        next: -prevState.next,
      };
      break;

    case '+':
    case '-':
    case '×':
    case '÷':
    case '%':
      if (prevState.operator) {
        if (prevState.operator === button) {
          const total = operation(
            prevState.total,
            prevState.next,
            prevState.operator
          );
          state = {
            total,
            next: null,
          };
        } else {
          state = {
            operator: button,
          };
        }
      } else if (prevState.next) {
        state = {
          total: prevState.next,
          next: null,
          operator: button,
        };
      }
      break;

    case '.':
      if (prevState.next && prevState.next.indexOf('.') >= 0) {
        return {};
      }
      state = {
        next: (prevState.next || '0') + '.',
      };
      break;

    case '=':
      if (prevState.operator && prevState.total && prevState.next) {
        const total = operation(
          prevState.total,
          prevState.next,
          prevState.operator
        );
        state = {
          total,
          next: null,
          operator: null,
        };
      }
      break;

    default:
      if (prevState.next === '0' && button === '0') {
        state = {
          total: null,
          next: null,
        };
      } else {
        const next = ((prevState.next || '') + button).slice(0, 11);
        state = prevState.operator
          ? {
              next,
            }
          : {
              next,
              total: null,
            };
      }

      break;
  }
  return state;
};

export default calculator;
