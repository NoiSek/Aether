// UserPanelForm -> Required by Components/UserPanel
// --------------------------------------
// The form displayed within the User Panel to handle
// user input for the authentication process.

import Inferno from 'inferno';

import SessionDropdown from './SessionDropdown';
import PasswordField from './PasswordField';


export const UserPanelForm = (props) => {
  return (
    <form className="login-form" onSubmit={ props.handleLoginSubmit }>
      <div className="user-username">{ props.activeUser.display_name }</div>
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
              dropdownActive={ props.dropdownActive }
              handleDropdownClick={ props.handleDropdownClick }
              handleDropdownLeave={ props.handleDropdownLeave }
              setActiveSession={ props.setActiveSession }
            />
          </div>
          <div className="right">
            <input type="submit" value="GO" className="submit-button" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserPanelForm;
