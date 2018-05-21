import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import ColorPicker from '../inputs/ColorPicker';
import TextField from '../inputs/TextField';
import Checkbox from '../inputs/Checkbox';
import Dropdown from '../inputs/Dropdown';


export const StyleSection = (props) => {
  const settings = props.settings;

  return (
    <div className="settings-style">
      <div className="left">
        <ul>
          <h4>Window Appearance</h4>
          <hr />
          <TextField
            name={ "Border Radius" }
            value={ settings.window_border_radius }
            boundFunction={ props.settingsSetValue.bind(this, 'window_border_radius') }
          />
          <TextField
            name={ "Font-Size" }
            value={ settings.window_font_size }
            boundFunction={ props.settingsSetValue.bind(this, 'window_font_size') }
          />
          <TextField
            name={ "DPI Zoom" }
            value={ settings.page_zoom }
            boundFunction={ props.settingsSetValue.bind(this, 'page_zoom') }
          />

          <h4>Eye Candy</h4>
          <hr />
          <Checkbox
            name={ "Experimental Stars" }
            value={ settings.experimental_stars_enabled }
            boundFunction={ props.settingsToggleBinary.bind(this, 'experimental_stars_enabled') }
          />

        </ul>
      </div>
      <div className="right">
        <ul>
          <h4>Command Panel</h4>
          <hr />
          <Checkbox
            name={ "Icons Enabled" }
            value={ settings.command_icons_enabled }
            boundFunction={ props.settingsToggleBinary.bind(this, 'command_icons_enabled') }
          />
          <Dropdown
            name={ "Text Align" }
            value={ settings.command_text_align }
            options={ ['left', 'center', 'right'] }
            boundFunction={ props.settingsSetValue.bind(this, 'command_text_align') }
          />
          <div className="color-group">
            <ColorPicker
              name={ "Background" }
              value={ settings.style_command_background_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_command_background_color') }
            />
            <ColorPicker
              name={ "Icon Color" }
              value={ settings.style_command_icon_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_command_icon_color') }
            />
            <ColorPicker
              name={ "Text Color" }
              value={ settings.style_command_text_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_command_text_color') }
            />
          </div>

          <h4>Login Panel</h4>
          <hr />
          <Checkbox
            name={ "Border Enabled" }
            value={ settings.style_login_border_enabled }
            boundFunction={ props.settingsToggleBinary.bind(this, 'style_login_border_enabled') }
          />
          <div className="color-group">
            <ColorPicker
              name={ "Border Color" }
              value={ settings.style_login_border_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_login_border_color') }
            />
            <ColorPicker
              name={ "Gradient-Top" }
              value={ settings.style_login_gradient_top_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_login_gradient_top_color') }
            />
            <ColorPicker
              name={ "Gradient-Bottom" }
              value={ settings.style_login_gradient_bottom_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_login_gradient_bottom_color') }
            />
            <ColorPicker
              name={ "Button Color" }
              value={ settings.style_login_button_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_login_button_color') }
            />
            <ColorPicker
              name={ "Username" }
              value={ settings.style_login_username_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_login_username_color') }
            />
          </div>
        </ul>
      </div>
    </div>
  );
};


StyleSection.propTypes = {
  'settings': PropTypes.object.isRequired,
  'settingsSetValue': PropTypes.func.isRequired,
  'settingsToggleBinary': PropTypes.func.isRequired
};


export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(StyleSection);
