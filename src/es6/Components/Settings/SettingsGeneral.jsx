import Inferno from 'inferno';

import * as FileOperations from "../../Logic/FileOperations";


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
  return (
    <div className="settings-general">
      <div className="left">
        { LogoChooser(props) }
      </div>
      <div className="right">
      </div>
    </div>
  );
};


export default SettingsGeneral;
