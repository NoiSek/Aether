import Inferno from 'inferno';

import { FormTextField } from "./FormTextField";


export const SettingsStyle = (props) => {
  let storeState = props.store.getState();

  return (
    <div className="settings-style">
      <ul>
        <h4>Window Appearance</h4>
        <hr />
        <FormTextField
          name={ "Border Radius" }
          value={ storeState.settings.window_border_radius }
          boundFunction={ props.settingsSetValue.bind(this, 'window_border_radius') }
        />
        <FormTextField
          name={ "Font-Size" }
          value={ storeState.settings.window_font_size }
          boundFunction={ props.settingsSetValue.bind(this, 'window_font_size') }
        />
      </ul>
    </div>
  );
};


export default SettingsStyle;
