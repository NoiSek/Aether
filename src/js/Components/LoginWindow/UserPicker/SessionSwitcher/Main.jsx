// SessionSelector -> Required by Components/UserPanel/Form
// --------------------------------------
// Displays session as a grid for session switching.

import PropTypes from 'prop-types';
import React from 'react';
import SessionItem from './SessionItem';

import { connect } from 'react-redux';


class SessionSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(sessionKey) {
    this.props.setActiveSession(sessionKey);
    this.props.close();
  }

  render() {
    // Sort by active, then alphabetical.
    // Then filter out duplicate entries
    // Doing this requires using sort in reverse.
    let classes = ['login-session-switcher'];

    if (this.props.active) {
      classes.push('active');
    }

    if (window.lightdm.sessions.length < 4) {
      classes.push('no-justify');
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
            buttonBackgroundColor={ this.props.buttonBackgroundColor }
            buttonTextColor={ this.props.buttonTextColor }
            handleClick={ this.handleClick.bind(this) }
            index={ index }
          />
        ))
    );

    return (
      <div className={ classes.join(' ') }>
        { rows }
      </div>
    );
  }
}

SessionSelector.propTypes = {
  'setActiveSession': PropTypes.func.isRequired,
  'close': PropTypes.func.isRequired,
  'buttonBackgroundColor': PropTypes.string.isRequired,
  'buttonTextColor': PropTypes.string.isRequired,
  'active': PropTypes.bool.isRequired,
};


export default connect(
  (state) => {
    return {
      'buttonBackgroundColor': state.settings.style_login_button_color,
      'buttonTextColor': state.settings.style_login_button_text_color
    };
  },
  null
)(SessionSelector);
