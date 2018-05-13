// UserPanelForm -> Required by Components/UserPanel
// --------------------------------------
// The form displayed within the User Panel to handle
// user input for the authentication process.

import PropTypes from 'prop-types';
import React from 'react';
import cxs from 'cxs';

import { connect } from 'react-redux';

import SessionDropdown from './SessionDropdown';
import PasswordField from './PasswordField';


const submitButton = require('img/arrow.svg');


export const UserPanelForm = (props) => {
  let usernameClasses = ['user-username'];
  usernameClasses.push(cxs({
    "color": props.settings.style_login_username_color
  }));

  let submitButtonClasses = ['submit-button'];
  submitButtonClasses.push(cxs({
    "color": props.settings.style_login_button_color
  }));

  return (
    <form className="login-form" onSubmit={ props.handleLoginSubmit }>
      <div className={ usernameClasses.join(" ") }>{ props.activeUser.display_name }</div>
      <div className="user-password-container">
        <PasswordField
          password={ props.password }
          passwordFailed={ props.passwordFailed }
          handlePasswordInput={ props.handlePasswordInput }
        />
      </div>
      <div className="submit-row-container">
        <div className="submit-row">
          <div className="left">
            <SessionDropdown
              activeSession={ props.activeSession }
              setActiveSession={ props.setActiveSession }
            />
          </div>
          <div className="right">
            <label className={ submitButtonClasses.join(" ") }>
              <input type="submit" />
              <div dangerouslySetInnerHTML={{ "__html": submitButton }} />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};


UserPanelForm.propTypes = {
  'activeUser': PropTypes.object,
  'activeSession': PropTypes.object,
  'settings': PropTypes.object.isRequired,

  'password': PropTypes.string.isRequired,
  'passwordFailed': PropTypes.bool.isRequired,

  'handleLoginSubmit': PropTypes.func.isRequired,
  'handlePasswordInput': PropTypes.func.isRequired,
  'setActiveSession': PropTypes.func.isRequired
};


export default connect(
  (state) => {
    return {
      'activeUser': state.user,
      'activeSession': state.session,
      'settings': state.settings
    };
  },
  null
)(UserPanelForm);
