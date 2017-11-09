import React, { Component } from 'react';

class A extends Component {
  shouldComponentUpdate(nextProps) {
    const result = Boolean(nextProps.item);
    console.log('A#shouldComponentUpdate?', result);
    return result;
  }

  render() {
    console.log('A#render', this.props.item);
    return <B item={this.props.item} />;
  }
}

class B extends Component {
  state = { seconds: 0 };
  componentDidMount() {
    this._interval = setInterval(
      () => this.setState({ seconds: this.state.seconds + 1 }),
      1000
    );
  }

  componentWillUnMount() {
    clearInterval(this._interval);
  }

  render() {
    console.log('B#render', this.props.item);
    return (
      <div>
        <strong>{this.props.item.name}</strong>
        <span>{this.state.seconds} seconds</span>
      </div>
    );
  }
}

export default A;
