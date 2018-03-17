import React, { Component } from 'react';

class Button extends Component {
  handleClick() {
    this.props.clickHandler(this.props.button);
  }
  render() {
    const {cls = '', button} = this.props;
    return (
      <button className={`input-btn ${cls}`} onClick={this.handleClick.bind(this)}>
        {button}
      </button>
    );
  }
}

export default Button;
