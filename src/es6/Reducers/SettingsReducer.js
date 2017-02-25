/* eslint { no-redeclare: 0 } */
import * as Settings from "../Logic/Settings";

export function addAdditionalSettings(state) {
  // Define our defaults

  let distroDefault = (window.debug === true) ? "src/test/logos/archlinux.png" : "/usr/share/lightdm-webkit/themes/lightdm-webkit-theme-aether/src/img/logos/archlinux.png";

  let defaults = {
    "active": false,
    "distro": distroDefault,

    "avatar_enabled": true,
    "avatar_size": "200px",
    "avatar_shape": "circle",

    "font_dpi": 1.0,
    "font_color": "#222222",
    "font_family": "Open Sans",
    "font_scale": 1.0,

    "date_enabled": true,
    "date_format": "%A, the %o of %B"
  };

  let settings = {};

  for (let key of Object.keys(defaults)) {
    settings[key] = Settings.requestSetting(key, defaults[key]);
  }

  return { ...state, "settings": settings, "cachedSettings": settings };
}

export const SettingsReducer = (state, action) => {
  switch(action.type) {
    case 'SETTINGS_LOGO_CHANGE':
      var newSettings = { ...state.settings, "distro": action.path };

      return { ...state, "settings": newSettings };

    case 'SETTINGS_REJECT':
      // Restore settings from the 'default' state.
      var newSettings = { ...state.cachedSettings };

      return { ...state, "settings": newSettings };

    case 'SETTINGS_SAVE':
      // Cycle to localStorage for persistence.
      for (let key of Object.keys(state.settings)) {
        Settings.saveSetting(key, state.settings[key]);
      }

      // Save our new settings as the 'default' state.
      var newCache = { ...state.settings };

      return { ...state, "cachedSettings": newCache };

    case 'SETTINGS_TOGGLE_ACTIVE':
      var newSettings = { ...state.settings, "active": !state.settings.active };

      return { ...state, "settings": newSettings };

    default:
      return state;
  }
};
