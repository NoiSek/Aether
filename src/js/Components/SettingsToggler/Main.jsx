// SettingsToggler -> Required by Main
// --------------------------------------
// Handles Settings toggling. Straightforward stuff.

import React from 'react';
import ReactDOM from 'react-dom';

import  { connect } from 'react-redux';


const toggleSettings = (props) => {
  props.dispatch({
    'type': "SETTINGS_TOGGLE_ACTIVE"
  });
};


export const SettingsToggler = (props) => {
  let classes = ['settings-toggler'];

  return ReactDOM.createPortal(
    <div
      className={ classes.join(' ') }
      onClick={ toggleSettings.bind(this, props) }
    >
      &#x2261;
    </div>,
    document.getElementById("settings-toggler-mount")
  );
};


export default connect(
  (state) => { return {}; },
  null
)(SettingsToggler);
