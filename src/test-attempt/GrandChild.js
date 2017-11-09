// @flow

import React from 'react';

type Props = {
  item: Object,
  singularName: string,
};

const Text = props => <span {...props}/>

export default class GrandChild extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    return Boolean(nextProps.item);
  }

  render() {
    console.log('GrandChild');
    return (
      <Text>{this.renderSaveButtonText()}</Text>
    );
  }

  renderSaveButtonText() {
    const {item} = this.props;
    const verb = item.isMint ? 'Create' : 'Save';
    const noun = item.isDraft ? 'Draft' : this.props.singularName;

    return `${verb} ${noun}`;
  }
}

