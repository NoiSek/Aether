// SessionDropdown -> Required by Components/UserPanel/Form
// --------------------------------------
// Displays session rows as a dropdown to handle
// session switching.

import PropTypes from 'prop-types';
import React from 'react';

import SessionRow from './SessionRow';


export const SessionDropdown = (props) => {
  // Sort by active, then alphabetical.
  // Doing this requires using sort in reverse.
  let rows = (
    window.lightdm.sessions
      .sort((a, b) => {
        return a.name.toUpperCase() > b.name.toUpperCase();
      })
      .sort((a, b) => {
        return (b.key.toLowerCase() === props.activeSession.key.toLowerCase()) ? 1 : -1;
      })
      .map((session) => (
        <SessionRow
          activeSession={ props.activeSession }
          buttonColor={ props.buttonColor }
          key={ session.key }
          session={ session }
          handleDropdownClick={ props.handleDropdownClick }
          handleDropdownLeave={ props.handleDropdownLeave }
          setActiveSession={ props.setActiveSession }
        />
      ))
  );

  let classes = ['dropdown', 'user-session'];

  if (props.dropdownActive === true) {
    classes.push('active');
  }

  return (
    <div className={ classes.join(' ') } onMouseLeave={ props.handleDropdownLeave }>
      { rows }
    </div>
  );
};


SessionDropdown.propTypes = {
  'activeSession': PropTypes.object.isRequired,
  'buttonColor': PropTypes.string.isRequired,
  'dropdownActive': PropTypes.bool.isRequired,
  'handleDropdownClick': PropTypes.func.isRequired,
  'handleDropdownLeave': PropTypes.func.isRequired,
  'setActiveSession': PropTypes.func.isRequired
};


export default SessionDropdown;
