// UserPanelForm -> Required by Components/UserPanel
// --------------------------------------
// The form displayed within the User Panel to handle
// user input for the authentication process.

import PropTypes from 'prop-types';
import React from 'react';
import cxs from 'cxs';

import { connect } from 'react-redux';

import PasswordField from './PasswordField';
import SessionSelector from './SessionSelector';


const submitButton = require('img/arrow.svg');

const TRANSITION_NONE = 0;
const TRANSITION_TO_SELECTOR = 1;
const TRANSITION_FROM_SELECTOR = 2;

const TRANSITION_TIME_INPUT    = 200;
const TRANSITION_TIME_SELECTOR = 300;

class UserPanelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'selectingSession': false,
      'transitionType': TRANSITION_NONE
    };
  }

  openSessionSelector() {
    this.setState({
      'transitionType': TRANSITION_TO_SELECTOR
    });

    setTimeout(() => {
      this.setState({
        'selectingSession': true
      });

      setTimeout(() => {
        this.setState({
          'transitionType': TRANSITION_NONE
        });
      }, TRANSITION_TIME_SELECTOR);
    }, TRANSITION_TIME_INPUT);
  }

  closeSessionSelector() {
    this.setState({
      'transitionType': TRANSITION_FROM_SELECTOR
    });

    setTimeout(() => {
      this.setState({
        'selectingSession': false
      });

      setTimeout(() => {
        this.setState({
          'transitionType': TRANSITION_NONE
        });

        let target = document.getElementById('password-field');
        target.focus();
        target.select();
      }, TRANSITION_TIME_INPUT);
    }, TRANSITION_TIME_SELECTOR);
  }

  render() {
    let usernameClasses = ['user-username'];
    usernameClasses.push(cxs({
      "color": this.props.settings.style_login_username_color
    }));

    let submitButtonClasses = ['submit-button'];
    submitButtonClasses.push(cxs({
      "color": this.props.settings.style_login_button_color
    }));

    let sessionSelectButtonClasses = ['left'];
    sessionSelectButtonClasses.push(cxs({
      "background-color": this.props.settings.style_login_button_color
    }));

    let inputContainerClasses = ['user-input-container'];
    if (this.state.selectingSession) {
      inputContainerClasses.push('hidden');
    } else {
      switch(this.state.transitionType) {
        case TRANSITION_TO_SELECTOR:   inputContainerClasses.push('fadeOut'); break;
        case TRANSITION_FROM_SELECTOR: inputContainerClasses.push('fadeIn');  break;
        case TRANSITION_NONE:
        default: break;
      }
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
            <div className={ sessionSelectButtonClasses.join(' ') } onClick={ this.openSessionSelector.bind(this) }>
              <div className='text'>{ this.props.activeSession.name }</div>
            </div>
            <div className="right">
              <label className={ submitButtonClasses.join(" ") }>
                <input type="submit" />
                <div dangerouslySetInnerHTML={{ "__html": submitButton }} />
              </label>
            </div>
          </div>
        </div>
        <SessionSelector
          setActiveSession={ this.props.setActiveSession }
          close={ this.closeSessionSelector.bind(this) }
          active={ this.state.selectingSession }
          transitionType={ this.state.transitionType }
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
