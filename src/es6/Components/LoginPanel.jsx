import Inferno from 'inferno.min';
import Component from 'inferno-component.min';

import UserSwitcher from './UserSwitcher';
import LoginPanelForm from './LoginPanelForm';

const FADE_IN_DURATION = 200;
const ERROR_SHAKE_DURATION = 600;

export default class LoginPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "activeUser": undefined,
      "activeSession": undefined,
      "dropdownActive": false,
      "fadeIn": false,
      "password": "",
      "passwordFailed": false,
      "switcherActive": false
    };
  }

  componentWillMount() {
    let defaultUser = this.findDefaultUser();
    let defaultSession = this.findDefaultSession(defaultUser);

    this.setState({
      "activeUser": defaultUser,
      "activeSession": defaultSession
    });

    // Define functions required in the global scope by LightDM.
    window.show_prompt = (text, type) => {
      if (type === "text") {
        window.notifications.generate(text);
      } else if (type === "password") {
        window.lightdm.respond(this.state.password);
      }
    };
    window.show_message = (text, type) => {
      window.notifications.generate(text, type);
    };
    window.authentication_complete = () => {
      if (window.lightdm.is_authenticated) {
        window.lightdm.start_session_sync(this.state.activeSession.key);
      } else {
        this.rejectPassword();
      }
    };
    window.autologin_timer_expired = () => {
      window.notifications.generate("Autologin expired.");
    };
  }

  findDefaultUser() {
    if (window.lightdm.lock_hint === true) {
      return window.lightdm.users.filter((user) => user.logged_in)[0];
    } else {
      if(this.state.activeUser !== undefined) {
        return this.state.activeUser;
      } else if (window.lightdm.select_user !== undefined && window.lightdm.select_user !== null) {
        window.lightdm.users.filter((user) => user.name === window.lightdm.select_user)[0];
      } else {
        return window.lightdm.users[0];
      }
    }
  }

  findDefaultSession(user) {
    return this.findSession(window.lightdm.default_session) || this.findSession(user.session) || window.lightdm.sessions[0];
  }

  findSession(sessionName) {
    if (sessionName === undefined) {
      return false;
    }
    return window.lightdm.sessions.filter((session) => session.name.toLowerCase() === sessionName.toLowerCase() || session.key.toLowerCase() === sessionName.toLowerCase())[0];
  }

  handleDropdownClick(event) {
    this.setState({
      "dropdownActive": true
    });
  }

  handleDropdownLeave(event) {
    this.setState({
      "dropdownActive": false
    });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    
    if (window.debug === false) {
      window.lightdm.authenticate(this.state.activeUser.name);
    } else {
      if (this.state.password.toLowerCase() !== "password") {
        this.rejectPassword();
      } else {
        window.notifications.generate(`You are now logged in as ${this.state.activeUser.display_name} to ${this.state.activeSession.name}.`, 'success');
        this.setState({
          "password": ""
        });
      }
    }
  }

  handleSwitcherClick(event) {
    if (window.lightdm.users.length < 2) {
      window.notifications.generate("You are the only user that is able to log in on this system.", 'error');
      return false;
    } else if (window.lightdm.users.length === 2) {
      // No point in showing them the switcher if there is only one other user. Switch immediately.
      let otherUser = window.lightdm.users.filter((user) => {
        return user.name !== this.state.activeUser.name;
      })[0];

      this.setActiveUser(otherUser, true);
      window.notifications.generate("User has been automatically switched to the only other user on this system.");
    } else {
      this.setState({
        "switcherActive": true
      });
    }
  }

  handlePasswordInput(event) {
    this.setState({
      "password": event.target.value
    });
  }

  setActiveSession(session) {
    if (typeof session === typeof String()) {
      session = this.findSession(session);
    }

    this.setState({
      "activeSession": session,
      "dropdownActive": false
    });
  }

  setActiveUser(user, isBypass) {
    this.setState({
      "activeUser": user,
      "switcherActive": false
    });

    if (isBypass === false || isBypass === undefined) {
      this.setState({
        "fadeIn": true
      });

      setTimeout(() => {
        this.setState({
          "fadeIn": false
        });
      }, FADE_IN_DURATION);
    }
  }

  rejectPassword() {    
    if(this.state.passwordFailed === false) {
      window.notifications.generate("Password incorrect, please try again.", 'error');

      this.setState({
        "password": "",
        "passwordFailed": true
      });

      setTimeout(() => {
        this.setState({
          "passwordFailed": false
        });
      }, ERROR_SHAKE_DURATION);
    }
  }

  generateSwitchUserButton() {
    let classes = ['left'];

    if (window.lightdm.users.length < 2) {
      classes.push("disabled");
    }

    return (
      <div className={ classes.join(' ') } onClick={ this.handleSwitcherClick.bind(this) }>SWITCH USER</div>
    );
  }

  render() {
    let loginPanelClasses = ['login-panel-main'];

    if (this.state.fadeIn === true) {
      loginPanelClasses.push('fadein');
    }

    if (this.state.switcherActive === true) {
      loginPanelClasses.push('fadeout');
    }

    let switchUserButton = this.generateSwitchUserButton();

    return (
      <div className="login-panel-contents">
        <div className={ loginPanelClasses.join(' ') }>
          <div className="avatar-container">
            <div className="avatar-background">
              <div className="avatar-mask">
                <img className="user-avatar" src={ this.state.activeUser.image } />
              </div>
            </div>
          </div>
          <LoginPanelForm 
            activeSession={ this.state.activeSession }
            activeUser={ this.state.activeUser }
            dropdownActive={ this.state.dropdownActive }
            password={ this.state.password }
            passwordFailed={ this.state.passwordFailed }
            handleLoginSubmit={ this.handleLoginSubmit.bind(this) } 
            handleDropdownClick={ this.handleDropdownClick.bind(this) }
            handleDropdownLeave={ this.handleDropdownLeave.bind(this) }
            handlePasswordInput={ this.handlePasswordInput.bind(this) }
            setActiveSession={ this.setActiveSession.bind(this) }
          />
          <div className="bottom">
            { switchUserButton }
          </div>
        </div>
        <UserSwitcher 
          active={ this.state.switcherActive }
          activeUser={ this.state.activeUser }
          setActiveUser={ this.setActiveUser.bind(this) } 
        />
      </div>
    );
  }
}