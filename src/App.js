import React, { Component } from 'react';

import Checkbox from './Checkbox';
import Username from './Username';
import logo from './logo.svg';
import './App.css';

import Todos from './Todos';

class App extends Component {
  state = {
    shouldComponentUpdate: false,
  };

  toggleSCU = (shouldComponentUpdate) => {
    this.setState({shouldComponentUpdate});
  };

  render() {
    console.log('render', this.state.shouldComponentUpdate);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Checkbox label="shouldComponentUpdate" onChange={this.toggleSCU} />
          <Username />
        </header>
        <main className="App-main">
          <p className="App-intro">
            This is an attempt to break the app by having render methods called even
            when `shouldComponentUpate` returns false.
          </p>
          <p>
            {this.state.shouldComponentUpdate
              ? 'Nothing below here should have just updated'
              : 'Everything should be updating as normal'}
          </p>
          <Todos shouldComponentUpdate={this.state.shouldComponentUpdate} />
        </main>
      </div>
    );
  }
}

export default App;
