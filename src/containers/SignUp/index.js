import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Input, Icon, Button, Space } from 'antd';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectName, makeSelectEmail, makeSelectPassword } from './signup.selectors';
import { postSignUpAction, onChangeNameAction, onChangeEmailAction, onChangePasswordAction } from './signup.actions';
import reducer from './signup.reducer';
import saga from './signup.saga';

const key = 'signup';

function SignUp(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [checkPassword, setCheckPassword] = React.useState('');
  const [isPasswordPass, setIsPassworkPass] = React.useState(false);

  const firstPassword = React.useMemo(() => {
    if (props.password === checkPassword) {
      setIsPassworkPass(true);
    } else {
      setIsPassworkPass(false);
    }
    return props.password;
  }, [props.password]);

  const onCheckPassword = e => {
    setCheckPassword(e.target.value);
    if (firstPassword === e.target.value) {
      setIsPassworkPass(true);
    } else {
      setIsPassworkPass(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>SignUp</title>
        <meta name="description" content="Description of SignUp" />
      </Helmet>
      <div style={{ marginTop: 32, marginBottom: 16 }}>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Name"
          size="large"
          onChange={props.onChangeName}
          onPressEnter={props.postSignUp}
          value={props.name}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
          size="large"
          onChange={props.onChangeEmail}
          onPressEnter={props.postSignUp}
          value={props.email}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input.Password
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Password"
          size="large"
          onChange={props.onChangePassword}
          onPressEnter={props.postSignUp}
          value={props.password}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input.Password
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Password Confirm"
          size="large"
          onChange={onCheckPassword}
          value={checkPassword}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Age" size="large" />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Occupation"
          size="large"
        />
      </div>
      <Space>
        <Button disabled={!isPasswordPass} type="primary" onClick={props.postSignUp}>
          Register
        </Button>
      </Space>
    </>
  );
}

SignUp.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  postSignUp: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  name: makeSelectName(),
  password: makeSelectPassword(),
});

const mapDispatchToProps = dispatch => ({
  postSignUp: () => dispatch(postSignUpAction()),
  onChangeName: e => dispatch(onChangeNameAction(e.target.value)),
  onChangeEmail: e => dispatch(onChangeEmailAction(e.target.value)),
  onChangePassword: e => dispatch(onChangePasswordAction(e.target.value)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SignUp);
