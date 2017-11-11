// PasswordField -> Required by Components/UserPanel/Form
// --------------------------------------
// Simple password input field.

import PropTypes from 'prop-types';
import React from 'react';


const PasswordField = (props) => {
  let classes = ['user-password'];

  if (props.passwordFailed === true) {
    classes.push('error');
  }

  return (
    <input
      id="password-field"
      type="password"
      placeholder="*******************"
      className={ classes.join(' ') }
      value={ props.password }
      onInput={ props.handlePasswordInput }
    />
  );
};


PasswordField.propTypes = {
  'password': PropTypes.string.isRequired,
  'passwordFailed': PropTypes.bool.isRequired,
  'handlePasswordInput': PropTypes.func.isRequired
};


export default PasswordField;
