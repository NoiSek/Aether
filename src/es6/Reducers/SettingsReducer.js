/* eslint { no-redeclare: 0 } */
import * as Settings from "../Logic/Settings";

export function addAdditionalSettings(state) {
  // Define our defaults

  let distroDefault = (window.debug === true) ? "src/test/logos/archlinux.png" : "/usr/share/lightdm-webkit/themes/lightdm-webkit-theme-aether/src/img/logos/archlinux.png";

  let defaults = {
    "active": false,
    "minimized": false,
    "distro": distroDefault,

    "avatar_enabled": true,
    "avatar_size": "200px",
    "avatar_shape": "circle",

    "font_dpi": 1.0,
    "font_color": "#222222",
    "font_family": "Open Sans",
    "font_scale": 1.0,

    "date_enabled": true,
    "date_format": "<em>%A</em>, the <em>%o</em> of <em>%B</em>",

    "time_enabled": true,
    "time_format": "%H:%M",

    "command_shutdown_enabled": true,
    "command_reboot_enabled": true,
    "command_hibernate_enabled": true,
    "command_sleep_enabled": true
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

      // Create a notification
      window.notifications.generate("Reverting to previous settings.", "success");

      return { ...state, "settings": newSettings };

    case 'SETTINGS_SAVE':
      // Cycle to localStorage for persistence.
      for (let key of Object.keys(state.settings)) {
        Settings.saveSetting(key, state.settings[key]);
      }

      // Save our new settings as the 'default' state.
      var newCache = { ...state.settings };

      // Create a notification
      window.notifications.generate("Settings saved.", "success");

      return { ...state, "cachedSettings": newCache };

    case 'SETTINGS_SET_VALUE':
      var newSettings = { ...state.settings };
      console.log(action.name);console.log(action.value);

      newSettings[action.name] = action.value;

      return { ...state, "settings": newSettings };

    case 'SETTINGS_TOGGLE_ACTIVE':
      var newSettings = { ...state.settings, "active": !state.settings.active };

      // This shouldn't be here. It is, though.
      var el = document.getElementById("settings");

      if (newSettings.active === true) {
        el.className = el.className.replace(" hidden", "");
      } else {
        el.className += " hidden";
      }

      return { ...state, "settings": newSettings };

    case 'SETTINGS_TOGGLE_VALUE':
      var newSettings = { ...state.settings };

      newSettings[action.name] = !newSettings[action.name];

      return { ...state, "settings": newSettings };

    case 'SETTINGS_WINDOW_MINIMIZE':
      // This shouldn't be here. It is, though.
      var categories = document.querySelectorAll(".settings-categories")[0];
      var section = document.querySelectorAll(".settings-section")[0];

      // Check if the window is already minimized.
      if (categories.className.indexOf('minimize') !== -1) {
        categories.className = categories.className.replace('minimize', '');
        section.className = section.className.replace('minimize', '');
      } else {
        categories.className = categories.className + ' minimize';
        section.className = section.className + ' minimize';
      }

      return state;

    default:
      return state;
  }
};
