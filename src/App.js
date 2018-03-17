import React, { Component } from 'react';
import './App.css';
import ButtonPanel from './component/ButtonPanel';
import calculator from './calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operator: null,
    };
  }
  handleClick(button) {
    this.setState(calculator(this.state, button));
  }
  componentDidMount() {
    document.addEventListener('keydown', e => {
      const key = e.key;
      const keys = '1234567890.+-%';
      let button;
      if (keys.indexOf(key) >= 0) {
        button = key;
      } else {
        switch (key) {
          case '*':
            button = '×';
            break;
          case '/':
            button = '÷';
            break;
          case 'Enter':
            button = '=';
            break;
          default:
            button = null;
            break;
        }
      }
      button && this.setState(calculator(this.state, button));
    });
  }
  render() {
    const value = this.state.next || this.state.total || '0';
    const display =
      value.length > 11
        ? value.indexOf('.') ? parseFloat(value).toPrecision(10) : 'ERR'
        : value;
    const operator =
      '+-×÷'.indexOf(this.state.operator) >= 0 ? this.state.operator : null;
    return (
      <div className="calculator">
        <div className="calculator-output">
          <div>{operator}</div>
          <div>{display}</div>
        </div>
        <ButtonPanel value={value} clickHandler={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default App;
