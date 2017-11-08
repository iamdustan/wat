import React from 'react';
import PropTypes from 'prop-types';
import {
  shouldUpdate,
  getContext,
  withContext,
} from 'recompose';

const enhance = withContext(
  {
    store: PropTypes.object,
  },
  (props) => (
    console.log('withContext', props),
    {
      store
    }
  )
)

class GrandChildContainer extends React.PureComponent {
  render() {
    return (
      <GrandChild
        item={this.props.store.item}
        singularName="Name"
      />
    );
  }
}

export default enhance(GrandChildContainer);
