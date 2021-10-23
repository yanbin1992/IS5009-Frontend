import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Input, Icon, Button, Space } from 'antd';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { postSignOutAction } from './signout.actions';

const key = 'signup';

function SignOut(props) {
  // useInjectReducer({ key, reducer });
  // useInjectSaga({ key, saga });

  useEffect(() => {
    props.postSignOut();
    props.history.push('/');
  });

  return <></>;
}

SignOut.propTypes = {};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
  postSignOut: () => dispatch(postSignOutAction()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SignOut);
