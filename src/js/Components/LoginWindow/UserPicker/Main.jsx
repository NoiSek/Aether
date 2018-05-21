// UserPanel -> Required by Main
// --------------------------------------
// The login management half of the greeter logic.

import cxs from 'cxs';
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import UserSwitchButton from './UserSwitcher/UserSwitchButton';
import UserSwitcher from './UserSwitcher';
import UserPanelForm from './Form';

const FADE_IN_DURATION = 200;
const ERROR_SHAKE_DURATION = 600;

const CTRL_KEYCODE = 17;
const A_KEYCODE = 65;


class UserPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "fadeIn": false,
      "password": "",
      "passwordFailed": false,
      "switcherActive": false,
    };

    this.CTRL_Pressed = false;
    this.A_Pressed = false;
  }


  componentWillMount() {
    // Define functions required in the global scope by LightDM.
    window.show_prompt = (text, type) => {
      if (type === 'text') {
        window.notifications.generate(text);
      } else if (type === 'password') {
        window.lightdm.respond(this.state.password);
      }
    };

    window.show_message = (text, type) => {
      window.notifications.generate(text, type);
    };

    window.authentication_complete = () => {
      if (window.lightdm.is_authenticated) {
        window.lightdm.start_session_sync(this.props.activeSession.key);
      } else {
        this.rejectPassword();
      }
    };

    window.autologin_timer_expired = () => {
      window.notifications.generate("Autologin expired.");
    };

    // Add a handler for Ctrl+A to prevent selection issues.
    document.onkeydown = this.onKeyDown.bind(this);
    document.onkeyup = this.onKeyUp.bind(this);
  }


  onKeyDown(e) {
    if (e.keyCode === CTRL_KEYCODE) {
      this.CTRL_Pressed = true;
    }

    if (e.keyCode === A_KEYCODE) {
      this.A_Pressed = true;
    }

    if (this.CTRL_Pressed && this.A_Pressed) {
      e.preventDefault();

      let target = document.getElementById('password-field');
      target.focus();
      target.select();
    }
  }


  onKeyUp(e) {
    if (e.keyCode === CTRL_KEYCODE) {
      this.CTRL_Pressed = false;
    }

    if (e.keyCode === A_KEYCODE) {
      this.A_Pressed = false;
    }
  }


  handleLoginSubmit(event) {
    event.preventDefault();

    if (window.__debug === true) {
      if (this.state.password.toLowerCase() !== 'password') {
        this.rejectPassword();
      } else {
        window.notifications.generate(`You are now logged in as ${ this.props.activeUser.display_name } to ${ this.props.activeSession.name }.`, 'success');
        this.setState({
          "password": ""
        });
      }
    }

    else {
      window.lightdm.authenticate(this.props.activeUser.username || this.props.activeUser.name);
    }
  }


  handleSwitcherClick(event) {
    if (window.lightdm.users.length < 2) {
      window.notifications.generate("You are the only user that is able to log in on this system.", 'error');
      return false;
    } else if (window.lightdm.users.length === 2) {
      // No point in showing them the switcher if there is only one other user. Switch immediately.
      let otherUser = window.lightdm.users.filter((user) => {
        return user.username !== this.props.activeUser.username;
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
    this.props.dispatch({
      'type': 'AUTH_SET_ACTIVE_SESSION',
      'session': session
    });
  }


  setActiveUser(user, isBypass) {
    this.props.dispatch({
      "type": 'AUTH_SET_ACTIVE_USER',
      "user": user
    });

    // Fade in, except when switching between 1 of 2 users.
    if (isBypass === false || isBypass === undefined) {
      this.setState({
        "fadeIn": true,
        "switcherActive": false
      });

      setTimeout(() => {
        this.setState({
          "fadeIn": false
        });
      }, FADE_IN_DURATION);
    } else {
      this.setState({
        "switcherActive": false
      });
    }
  }


  rejectPassword() {
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


  render() {
    let loginPanelClasses = ['login-panel-main'];
    let avatarClasses = ['avatar-container'];
    let avatarBackgroundClasses = ['avatar-background'];
    let settings = this.props.settings;

    if (this.state.fadeIn === true) {
      loginPanelClasses.push('fadein');
    }

    if (this.state.switcherActive === true) {
      loginPanelClasses.push('fadeout');
    }

    if (settings.avatar_enabled === false) {
      avatarClasses.push('hidden');
    }

    if (settings.avatar_background_enabled === false) {
      avatarBackgroundClasses.push('avatar-background-hidden');
    }

    let _styles = {
      "background": `linear-gradient(to bottom, ${ settings.style_login_gradient_top_color } 0%, ${ settings.style_login_gradient_bottom_color } 100%)`,
      "border-color": settings.style_login_border_color
    };

    if (settings.style_login_border_enabled === false) {
      _styles['border'] = 'none !important';
    }

    let style = cxs(_styles);

    return (
      <div className={ `user-panel ${ style }` }>
        <div className={ loginPanelClasses.join(' ') }>
          <div className={ avatarClasses.join(' ') }>
            <div className= { avatarBackgroundClasses.join(' ') }>
              <div className="avatar-mask">
                <img className="user-avatar" src={ this.props.activeUser.image } />
              </div>
            </div>
          </div>
          <UserPanelForm
            password={ this.state.password }
            passwordFailed={ this.state.passwordFailed }
            handleLoginSubmit={ this.handleLoginSubmit.bind(this) }
            handlePasswordInput={ this.handlePasswordInput.bind(this) }
            setActiveSession={ this.setActiveSession.bind(this) }
          />
          <div className="bottom">
            <If condition={ settings.user_switcher_enabled }>
              <UserSwitchButton handleSwitcherClick={ this.handleSwitcherClick.bind(this) } />
            </If>
          </div>
        </div>
        <UserSwitcher
          active={ this.state.switcherActive }
          setActiveUser={ this.setActiveUser.bind(this) }
        />
      </div>
    );
  }
}


UserPicker.propTypes = {
  'dispatch': PropTypes.func.isRequired,
  'settings': PropTypes.object.isRequired,
  'activeUser': PropTypes.object.isRequired,
  'activeSession': PropTypes.object.isRequired
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
)(UserPicker);
