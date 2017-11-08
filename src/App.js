import React, { Component } from 'react';
import logo from './logo.svg';
import GrandChildContainer from './GrandChildContainer';

import Store from './store';

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.breakIt) {
      Store.store.item = null;
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <GrandChildContainer />
        </p>
      </div>
    );
  }
}

export default App;
