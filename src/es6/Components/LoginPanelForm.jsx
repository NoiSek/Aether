import Inferno from 'inferno.min';
import Component from 'inferno-component.min';

import LoginSessionDropdown from './LoginSessionDropdown';
import PasswordField from './PasswordField';

export default class LoginPanelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className="login-form" onSubmit={ this.props.handleLoginSubmit }>
        <div className="user-username">{ this.props.activeUser.display_name }</div>
        <div className="user-password-container">
          <PasswordField 
            password={ this.props.password }
            passwordFailed={ this.props.passwordFailed }
            handlePasswordInput={ this.props.handlePasswordInput }
          />
        </div>
        <div className="submit-row-container">
          <div className="submit-row">
            <div className="left">
              <LoginSessionDropdown 
                activeSession={ this.props.activeSession }
                dropdownActive={ this.props.dropdownActive }
                handleDropdownClick={ this.props.handleDropdownClick }
                handleDropdownLeave={ this.props.handleDropdownLeave }
                setActiveSession={ this.props.setActiveSession }
              />
            </div>
            <div className="right">
              <input type="submit" value="GO" className="submit-button" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
