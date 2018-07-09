// SessionSelector -> Required by Components/UserPanel/Form
// --------------------------------------
// Displays session as a grid for session switching.

import PropTypes from 'prop-types';
import React from 'react';
import SessionItem from './SessionItem';

import { connect } from 'react-redux';

const CLOSE_SESSION_SELECT = "__AETHER_COMMAND_CLOSE_SESSION_SELECT__";

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
    let rows = (
      window.lightdm.sessions
        .sort((a, b) => {
          return a.name.toUpperCase() > b.name.toUpperCase();
        })
        .filter((session, index, arr) => {
          let firstIndex = arr.findIndex((s) => {
            return s.key == session.key;
          });
          return firstIndex == index;
        })
        .map((session) => (
          <SessionItem
            key={ session.key }
            session={ session }
            buttonColor={ this.props.buttonColor }
            handleClick={ this.handleClick.bind(this) }
            typeClass='normal'
          />
        ))
    );

    let classes = ['login-session-switcher'];
    if (!this.props.active) {
      classes.push('hidden');
    }

    return (
      <div className={ classes.join(' ') }>
        { rows }
        <SessionItem
          key={ CLOSE_SESSION_SELECT }
          session={ { 'name': 'back', 'key': CLOSE_SESSION_SELECT } }
          buttonColor={ this.props.buttonColor }
          handleClick={ this.handleClick.bind(this) }
          typeClass='back'
        />
      </div>
    );
  }
}

SessionSelector.propTypes = {
  'setActiveSession': PropTypes.func.isRequired,
  'close': PropTypes.func.isRequired,
  'buttonColor': PropTypes.string.isRequired,
  'active': PropTypes.bool.isRequired
};


export default connect(
  (state) => {
    return {
      'buttonColor': state.settings.style_login_button_color
    };
  },
  null
)(SessionSelector);
