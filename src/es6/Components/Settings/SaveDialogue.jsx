import React from 'react';


const rejectSettings = (props) => {
  props.store.dispatch({
    'type': "SETTINGS_REJECT"
  });
};


const saveSettings = (props) => {
  props.store.dispatch({
    'type': "SETTINGS_SAVE"
  });
};


export const SaveDialogue = (props) => {
  return (
    <div className="save-dialogue">
      <button className="settings-reject" onClick={ rejectSettings.bind(this, props) } >revert</button>
      <button className="settings-save" onClick={ saveSettings.bind(this, props) } >save</button>
    </div>
  );
};


export default SaveDialogue;
