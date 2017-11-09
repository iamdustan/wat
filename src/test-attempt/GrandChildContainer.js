import React from 'react';
import PropTypes from 'prop-types';
import {
  compose,
  // shouldUpdate,
  getContext,
  withContext,
} from 'recompose';
import store from './store';
import GrandChild from './GrandChild';

const enhance = compose(
  withContext(
    {store: PropTypes.object},
    (props) => (store)
  ),
  getContext({store: PropTypes.object})
);

class GrandChildContainer extends React.Component {
  render() {
    console.log('GrandChildContainer');
    return (
      <GrandChild
        item={this.props.store.item}
        singularName="Name"
      />
    );
  }
}

export default enhance(GrandChildContainer);
