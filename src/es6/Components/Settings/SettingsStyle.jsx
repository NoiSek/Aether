import Inferno from 'inferno';

import { FormTextField } from './FormTextField';
import { FormCheckbox } from './FormCheckbox';
import { FormDropdown } from './FormDropdown';


export const SettingsStyle = (props) => {
  let storeState = props.store.getState();

  return (
    <div className="settings-style">
      <div className="left">
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
          <FormTextField
            name={ "DPI Zoom" }
            value={ storeState.settings.page_zoom }
            boundFunction={ props.settingsSetValue.bind(this, 'page_zoom') }
          />
        </ul>
      </div>
      <div className="right">
        <ul>
          <h4>Command Panel</h4>
          <hr />
          <FormCheckbox
            name={ "Icons Enabled" }
            value={ storeState.settings.command_icons_enabled }
            boundFunction={ props.settingsToggleBinary.bind(this, 'command_icons_enabled') }
          />
          <FormDropdown
            name={ "Text Align" }
            value={ storeState.settings.command_text_align }
            options={ ['left', 'center', 'right'] }
            boundFunction={ props.settingsSetValue.bind(this, 'command_text_align') }
          />
        </ul>
      </div>
    </div>
  );
};


export default SettingsStyle;
