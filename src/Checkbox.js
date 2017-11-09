import React, { Component } from 'react';

export default class Checkbox extends Component {
  state = {
    checked: false,
  };

  toggle = () => {
    this.setState(
      (prevState, props) => ({ checked: !prevState.checked }),
      () => this.props.onChange(this.state.checked)
    );
  };

  render() {
    return (
      <label>
        <input
          type="checkbox"
          onChange={this.toggle}
          checked={this.state.checked}
        />
        {this.props.label}
      </label>
    );
  }
}
