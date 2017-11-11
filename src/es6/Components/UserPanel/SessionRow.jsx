// SessionRow -> Required by Components/UserPanel/SessionDropdown
// --------------------------------------
// Just a row.

import PropTypes from 'prop-types';
import React from 'react';
import cxs from "cxs";


const SessionRow = (props) => {
  let classes = ['dropdown-item'];
  let eventHandler = props.setActiveSession.bind(this, props.session.key);

  if (props.session.key === props.activeSession.key) {
    eventHandler = props.handleDropdownClick;
    classes.push('active');

    classes.push(cxs({
      "background-color": props.buttonColor
    }));
  }

  return (
    <div className={ classes.join(' ') } key={ props.session.key } onClick={ eventHandler }>
      { props.session.name }
    </div>
  );
};


SessionRow.propTypes = {
  'activeSession': PropTypes.object.isRequired,
  'buttonColor': PropTypes.string.isRequired,
  'session': PropTypes.object.isRequired,
  'handleDropdownClick': PropTypes.func.isRequired,
  'setActiveSession': PropTypes.func.isRequired
};


export default SessionRow;
