// SessionRow -> Required by Components/UserPanel/SessionDropdown
// --------------------------------------
// Just a row.

import PropTypes from 'prop-types';
import React from 'react';
import cxs from "cxs";


const SessionRow = (props) => {
  let classes = ['dropdown-item'];

  if (props.active === true) {
    classes.push('active');

    classes.push(cxs({
      "background-color": props.buttonColor
    }));
  }

  return (
    <div className={ classes.join(' ') } key={ props.session.key } onClick={ props.handleClick }>
      { props.session.name }
    </div>
  );
};


SessionRow.propTypes = {
  'active': PropTypes.bool.isRequired,
  'buttonColor': PropTypes.string.isRequired,
  'session': PropTypes.object.isRequired,
  'handleClick': PropTypes.func.isRequired,
};


export default SessionRow;
