// UserPanelForm -> Required by Components/UserPanel
// --------------------------------------
// The form displayed within the User Panel to handle
// user input for the authentication process.

import Inferno from 'inferno';
import cxs from 'cxs';

import SessionDropdown from './SessionDropdown';
import PasswordField from './PasswordField';


export const UserPanelForm = (props) => {
  let usernameClasses = ['user-username'];
  usernameClasses.push(cxs({
    "color": props.usernameColor
  }));

  let submitButtonClasses = ['submit-button'];
  submitButtonClasses.push(cxs({
    "background-color": props.buttonColor
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
            <input type="submit" value="GO" className={ submitButtonClasses.join(" ") } />
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserPanelForm;
