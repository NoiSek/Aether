// SettingsToggler -> Required by Main
// --------------------------------------
// Handles Settings toggling. Straightforward stuff.

import React from 'react';


const toggleSettings = (props) => {
  props.store.dispatch({
    'type': "SETTINGS_TOGGLE_ACTIVE"
  });
};


export const SettingsToggler = (props) => {
  let classes = ['settings-toggler'];

  return (
    <div
      className={ classes.join(' ') }
      onClick={ toggleSettings.bind(this, props) }
    >
      &#x2261;
    </div>
  );
};


export default SettingsToggler;
