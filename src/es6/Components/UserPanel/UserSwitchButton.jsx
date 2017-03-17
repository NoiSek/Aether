// UserSwitchButton -> Required by Components/UserPanel
// --------------------------------------
// Toggles the UserSwitcher.

import Inferno from 'inferno';


export const UserSwitchButton = ({ handleSwitcherClick }) => {
  let classes = ['left'];

  if (window.lightdm.users.length < 2) {
    classes.push('disabled');
  }

  return (
    <div className={ classes.join(' ') } onClick={ handleSwitcherClick }>SWITCH USER</div>
  );
};


export default UserSwitchButton;
