import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { FormColorPicker } from '../inputs/ColorPicker';
import { FormTextField } from '../inputs/TextField';
import { FormCheckbox } from '../inputs/Checkbox';
import { FormDropdown } from '../inputs/Dropdown';


export const StyleSection = (props) => {
  const settings = props.settings;

  return (
    <div className="settings-style">
      <div className="left">
        <ul>
          <h4>Window Appearance</h4>
          <hr />
          <FormTextField
            name={ "Border Radius" }
            value={ settings.window_border_radius }
            boundFunction={ props.settingsSetValue.bind(this, 'window_border_radius') }
          />
          <FormTextField
            name={ "Font-Size" }
            value={ settings.window_font_size }
            boundFunction={ props.settingsSetValue.bind(this, 'window_font_size') }
          />
          <FormTextField
            name={ "DPI Zoom" }
            value={ settings.page_zoom }
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
            value={ settings.command_icons_enabled }
            boundFunction={ props.settingsToggleBinary.bind(this, 'command_icons_enabled') }
          />
          <FormDropdown
            name={ "Text Align" }
            value={ settings.command_text_align }
            options={ ['left', 'center', 'right'] }
            boundFunction={ props.settingsSetValue.bind(this, 'command_text_align') }
          />
          <div className="color-group">
            <FormColorPicker
              name={ "Background" }
              value={ settings.style_command_background_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_command_background_color') }
            />
            <FormColorPicker
              name={ "Icon Color" }
              value={ settings.style_command_icon_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_command_icon_color') }
            />
            <FormColorPicker
              name={ "Text Color" }
              value={ settings.style_command_text_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_command_text_color') }
            />
          </div>

          <h4>Login Panel</h4>
          <hr />
          <FormCheckbox
            name={ "Border Enabled" }
            value={ settings.style_login_border_enabled }
            boundFunction={ props.settingsToggleBinary.bind(this, 'style_login_border_enabled') }
          />
          <div className="color-group">
            <FormColorPicker
              name={ "Border Color" }
              value={ settings.style_login_border_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_login_border_color') }
            />
            <FormColorPicker
              name={ "Gradient-Top" }
              value={ settings.style_login_gradient_top_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_login_gradient_top_color') }
            />
            <FormColorPicker
              name={ "Gradient-Bottom" }
              value={ settings.style_login_gradient_bottom_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_login_gradient_bottom_color') }
            />
            <FormColorPicker
              name={ "Button Color" }
              value={ settings.style_login_button_color }
              boundFunction={ props.settingsSetValue.bind(this, 'style_login_button_color') }
            />
            <FormColorPicker
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
