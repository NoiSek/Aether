// SessionSelector -> Required by Components/UserPanel/Form
// --------------------------------------
// Displays session as a grid for session switching.

import PropTypes from 'prop-types';
import React from 'react';
import SessionItem from './SessionItem';

import { connect } from 'react-redux';

const CLOSE_SESSION_SELECT = "__AETHER_COMMAND_CLOSE_SESSION_SELECT__";

const TRANSITION_NONE = 0;
const TRANSITION_TO_SELECTOR = 1;
const TRANSITION_FROM_SELECTOR = 2;

class SessionSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(sessionKey) {
    if (sessionKey != CLOSE_SESSION_SELECT) {
      this.props.setActiveSession(sessionKey);
    }

    this.props.close();
  }

  render() {
    // Sort by active, then alphabetical.
    // Then filter out duplicate entries
    // Doing this requires using sort in reverse.
    let classes = ['login-session-switcher'];
    let normalClass = ['normal'];
    let backClass   = ['back'];

    if (!this.props.active) {
      classes.push('hidden');
    } else {
      if (this.props.staggered_enabled) {
        switch(this.props.transitionType) {
          case TRANSITION_TO_SELECTOR:   normalClass.push('fadeIn');  backClass.push('fadeIn');  break;
          case TRANSITION_FROM_SELECTOR: normalClass.push('fadeOut'); backClass.push('fadeOut'); break;
          case TRANSITION_NONE:
          default: break;
        }
      } else {
        switch(this.props.transitionType) {
          case TRANSITION_TO_SELECTOR:   classes.push('fadeIn'); break;
          case TRANSITION_FROM_SELECTOR: classes.push('fadeOut');  break;
          case TRANSITION_NONE:
          default: break;
        }
      }
    }

    let rows = (
      window.lightdm.sessions
        .sort((a, b) => {
          return a.name.toUpperCase() > b.name.toUpperCase();
        })
        .map((session, index) => (
          <SessionItem
            key={ session.key }
            session={ session }
            buttonColor={ this.props.buttonColor }
            handleClick={ this.handleClick.bind(this) }
            typeClass={ normalClass.join(' ') }
            index={ index }
            maxIndex={ window.lightdm.sessions.length }
          />
        ))
    );

    return (
      <div className={ classes.join(' ') }>
        { rows }
        <SessionItem
          key={ CLOSE_SESSION_SELECT }
          session={ { 'name': 'Back', 'key': CLOSE_SESSION_SELECT } }
          buttonColor={ this.props.buttonColor }
          handleClick={ this.handleClick.bind(this) }
          typeClass={ backClass.join(' ') }
          index={ window.lightdm.sessions.length }
          maxIndex={ window.lightdm.sessions.length }
        />
      </div>
    );
  }
}

SessionSelector.propTypes = {
  'setActiveSession': PropTypes.func.isRequired,
  'close': PropTypes.func.isRequired,
  'buttonColor': PropTypes.string.isRequired,
  'active': PropTypes.bool.isRequired,
  'transitionType': PropTypes.number.isRequired,
  'staggered_enabled': PropTypes.bool.isRequired
};


export default connect(
  (state) => {
    return {
      'buttonColor': state.settings.style_login_button_color,
      'staggered_enabled': state.settings.staggered_animations_enabled
    };
  },
  null
)(SessionSelector);
