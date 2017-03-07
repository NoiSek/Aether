// SettingsGeneral -> Required by Components/Settings
// --------------------------------------
// Basic distro / visibility / date & time formatting settings.

import Inferno from 'inferno';

import * as FileOperations from "../../Logic/FileOperations";
import { FormCheckbox } from "./FormCheckbox";

const onLogoChange = (store, e) => {
  store.dispatch({
    "type": 'SETTINGS_LOGO_CHANGE',
    "path": e.target.value
  });
};


const LogoChooser = (props) => {
  let logos = FileOperations.getLogos();
  let activeLogo = props.store.getState().settings.distro;

  let items = logos.map((e) => {
    let [path, fileName] = e;

    let selected = (activeLogo === path);

    return (
      <option value={ path } selected={ selected }>{ fileName.split(".")[0] }</option>
    );
  });

  let selectedItem = logos.filter((e) => (e[0] === activeLogo));
  selectedItem = selectedItem[0] || [""];

  return (
    <div>
      <div className="preview-logo">
        <img src={ selectedItem[0] } />
      </div>
      <select onChange={ onLogoChange.bind(this, props.store) }>
        { items }
      </select>
    </div>
  );
};


export const SettingsGeneral = (props) => {
  let storeState = props.store.getState();

  return (
    <div className="settings-general">
      <div className="left">
        { LogoChooser(props) }
      </div>
      <div className="right">
        <ul>
          <h4>Date & Time</h4>
          <hr />
          <FormCheckbox
            name={ "Date Enabled" }
            value={ storeState.settings.date_enabled }
            boundFunction={ props.settingsToggleBinary.bind(this, "date_enabled") }
          />
          <FormCheckbox
            name={ "Time Enabled" }
            value={ storeState.settings.time_enabled }
            boundFunction={ props.settingsToggleBinary.bind(this, "time_enabled") }
          />
        </ul>
      </div>
    </div>
  );
};


export default SettingsGeneral;
