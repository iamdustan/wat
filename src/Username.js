// @flow

import React from 'react';
import { connect } from 'react-redux';

const Username = props => props.username;

const mapStateToProps = state => state.user;

const ConnectedUsername = connect(
  mapStateToProps
)(Username);

export default ConnectedUsername;
