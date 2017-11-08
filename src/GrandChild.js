// @flow

import React from 'react';

type Props = {
  item: Object,
  singularName: string,
};

export default class GrandChild extends React.Component {
  shouldComponentUpdate(nextProps) {
    return Boolean(nextProps.item);
  }

  render() {
    return (
      <Text>{this.renderSaveButtonText(item, collection)}</Text>
    );
  }

  renderSaveButtonText() {
    const {item} = this.props;
    const verb = item.isMint ? 'Create' : 'Save';
    const noun = item.isDraft ? 'Draft' : this.props.singularName;

    return `${verb} ${noun}`;
  }
}

