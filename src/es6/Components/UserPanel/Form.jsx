// UserPanelForm -> Required by Components/UserPanel
// --------------------------------------
// The form displayed within the User Panel to handle
// user input for the authentication process.

import PropTypes from 'prop-types';
import React from 'react';
import cxs from 'cxs';

import SessionDropdown from './SessionDropdown';
import PasswordField from './PasswordField';


const submitButton = require('img/arrow.svg');


export const UserPanelForm = (props) => {
  let usernameClasses = ['user-username'];
  usernameClasses.push(cxs({
    "color": props.usernameColor
  }));

  let submitButtonClasses = ['submit-button'];
  submitButtonClasses.push(cxs({
    "color": props.buttonColor
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
              buttonColor={ props.buttonColor }
              dropdownActive={ props.dropdownActive }
              handleDropdownClick={ props.handleDropdownClick }
              handleDropdownLeave={ props.handleDropdownLeave }
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
  'buttonColor': PropTypes.string.isRequired,
  'usernameColor': PropTypes.string.isRequired,
  'password': PropTypes.string.isRequired,
  'passwordFailed': PropTypes.bool.isRequired,
  'activeUser': PropTypes.object.isRequired,
  'activeSession': PropTypes.object.isRequired,
  'dropdownActive': PropTypes.bool.isRequired,

  'handleDropdownClick': PropTypes.func.isRequired,
  'handleDropdownLeave': PropTypes.func.isRequired,
  'handleLoginSubmit': PropTypes.func.isRequired,
  'handlePasswordInput': PropTypes.func.isRequired,
  'setActiveSession': PropTypes.func.isRequired
};


export default UserPanelForm;
