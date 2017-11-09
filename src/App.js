import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Checkbox extends Component {
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

class App extends Component {
  state = {
    shouldComponentUpdate: false,
  };
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.shouldComponentUpdate;
  }

  toggleSCU = (shouldComponentUpdate) => {
    this.setState({shouldComponentUpdate});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Checkbox label="shouldComponentUpdate" onChange={this.toggleSCU} />
        </header>
      </div>
    );
  }
}

export default App;
