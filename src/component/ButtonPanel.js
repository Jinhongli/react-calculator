import React, { Component } from 'react';
import Button from './Button';

class ButtonPanel extends Component {
  handleClick = button => {
    this.props.clickHandler(button);
  };

  render() {
    const delName = (this.props.value && this.props.value !== '0') ? 'DEL' : 'AC';
    return (
      <div className="input-panel">
        <div className="input-row">
          <Button button={delName} cls="gray" clickHandler={this.handleClick} />
          <Button button="+/-" cls="gray" clickHandler={this.handleClick} />
          <Button button="%" cls="gray" clickHandler={this.handleClick} />
          <Button button="÷" cls="gray" clickHandler={this.handleClick} />
        </div>
        <div className="input-row">
          <Button button="7" clickHandler={this.handleClick} />
          <Button button="8" clickHandler={this.handleClick} />
          <Button button="9" clickHandler={this.handleClick} />
          <Button button="×" cls="gray" clickHandler={this.handleClick} />
        </div>
        <div className="input-row">
          <Button button="4" clickHandler={this.handleClick} />
          <Button button="5" clickHandler={this.handleClick} />
          <Button button="6" clickHandler={this.handleClick} />
          <Button button="-" cls="gray" clickHandler={this.handleClick} />
        </div>
        <div className="input-row">
          <Button button="1" clickHandler={this.handleClick} />
          <Button button="2" clickHandler={this.handleClick} />
          <Button button="3" clickHandler={this.handleClick} />
          <Button button="+" cls="gray" clickHandler={this.handleClick} />
        </div>
        <div className="input-row">
          <Button button="0" cls="col-2" clickHandler={this.handleClick} />
          <Button button="." clickHandler={this.handleClick} />
          <Button button="=" cls="orange" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
export default ButtonPanel;
