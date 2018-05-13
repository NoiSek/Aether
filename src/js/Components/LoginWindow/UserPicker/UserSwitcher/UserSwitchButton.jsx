// UserSwitchButton -> Required by Components/UserPanel
// --------------------------------------
// Toggles the UserSwitcher.

import React from 'react';
import PropTypes from 'prop-types';


export const UserSwitchButton = ({ handleSwitcherClick }) => {
  let classes = ['left'];

  if (window.lightdm.users.length < 2) {
    classes.push('disabled');
  }

  return (
    <div className={ classes.join(' ') } onClick={ handleSwitcherClick }>SWITCH USER</div>
  );
};


UserSwitchButton.propTypes = {
  'handleSwitcherClick': PropTypes.func.isRequired
};


export default UserSwitchButton;
