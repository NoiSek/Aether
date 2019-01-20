// UserPanelForm -> Required by Components/UserPanel
// --------------------------------------
// The form displayed within the User Panel to handle
// user input for the authentication process.

import PropTypes from 'prop-types';
import React from 'react';
import cxs from 'cxs';

import { connect } from 'react-redux';

import PasswordField from './PasswordField';
import SessionSwitcher from './SessionSwitcher';


const submitIcon = require('img/arrow.svg');


class UserPanelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'sessionSwitcherActive': false,
      'enableAnimation': false
    };
  }

  toggleSessionSwitcher() {
    this.setState({
      'sessionSwitcherActive': !this.state.sessionSwitcherActive,
      'enableAnimation': true
    });
  }

  render() {
    const textTransformDict = {
      'default': 'initial',
      'uppercase': 'uppercase',
      'lowercase': 'lowercase',
      'capitalize': 'capitalize'
    };

    const textTransformStyle = this.props.settings.style_username_capitalization;

    let usernameClasses = ['user-username'];
    usernameClasses.push(cxs({
      "color": this.props.settings.style_login_username_color,
      "text-transform": textTransformDict[textTransformStyle.toLowerCase()]
    }));

    let submitButtonClasses = ['submit-button'];
    submitButtonClasses.push(cxs({
      "color": this.props.settings.style_login_button_color
    }));

    let sessionSelectButtonClasses = ['left', 'session-select'];
    sessionSelectButtonClasses.push(cxs({
      "background-color": this.props.settings.style_login_button_color
    }));

    let inputContainerClasses = ['user-input-container'];

    if (!this.state.enableAnimation) {
      inputContainerClasses.push('animation-enabled');
    }

    if (this.state.sessionSwitcherActive) {
      inputContainerClasses.push('animate-out');
    }

    return (
      <form className="login-form" onSubmit={ this.props.handleLoginSubmit }>
        <div className={ usernameClasses.join(" ") }>{ this.props.activeUser.display_name }</div>
        <div className={ inputContainerClasses.join(' ') }>
          <div className="user-password-container">
            <PasswordField
              password={ this.props.password }
              passwordFailed={ this.props.passwordFailed }
              handlePasswordInput={ this.props.handlePasswordInput }
            />
          </div>
          <div className="submit-row">
            <div className={ sessionSelectButtonClasses.join(' ') } onClick={ this.toggleSessionSwitcher.bind(this) }>
              <div className='text'>{ this.props.activeSession.name }</div>
            </div>
            <div className="right">
              <label className={ submitButtonClasses.join(" ") }>
                <input type="submit" />
                <div dangerouslySetInnerHTML={{ "__html": submitIcon }} />
              </label>
            </div>
          </div>
        </div>
        <SessionSwitcher
          setActiveSession={ this.props.setActiveSession }
          close={ this.toggleSessionSwitcher.bind(this) }
          active={ this.state.sessionSwitcherActive }
        />
      </form>
    );
  }
}


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
