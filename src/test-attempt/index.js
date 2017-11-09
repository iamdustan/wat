import React, { Component } from 'react';
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
      <div>
        <GrandChildContainer />
      </div>
    );
  }
}

export default App;

