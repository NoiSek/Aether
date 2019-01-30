/* eslint { no-redeclare: 0 } */
import * as FileOperations from 'Logic/FileOperations';
import * as Settings from '../Logic/Settings';
import { setPageZoom } from '../Utils/Utils';

export function addAdditionalSettings(state) {
  // Define our defaults

  let distroDefault = (window.__debug === true) ? "src/test/logos/archlinux.png" : "/usr/share/lightdm-webkit/themes/lightdm-webkit-theme-aether/src/img/logos/archlinux.png";

  let defaults = {
    "active": false,
    "minimized": false,
    "distro": distroDefault,
    "default_user": "",
    "page_zoom": 1.0,

    "avatar_enabled": true,
    "avatar_size": "200px",
    "avatar_shape": "circle",
    "avatar_background_enabled": true,

    "font_scale": 1.0,

    "date_enabled": true,
    "date_format": "<em>%A</em>, the <em>%o</em> of <em>%B</em>",

    "experimental_stars_enabled": false,

    "time_enabled": true,
    "time_format": "%H:%M",

    "hostname_enabled": true,

    "use_lightdm_conf": false,

    "user_switcher_enabled": true,

    "command_shutdown_enabled": true,
    "command_reboot_enabled": true,
    "command_hibernate_enabled": true,
    "command_sleep_enabled": true,

    "style_command_logo_desaturate": false,
    "style_command_logo_brightness": 100,
    "style_command_icons_enabled": true,
    "style_command_text_align": "left",
    "style_command_background_color": "hsla(0, 0%, 22%, 1)",
    "style_command_icon_color": "hsla(349, 98%, 65%, 1)",
    "style_command_text_color": "hsla(0, 100%, 100%, 1)",
    "style_login_border_color": "hsla(0, 100%, 100%, 0.1)",
    "style_login_border_enabled": true,
    "style_login_button_color": "hsla(0, 100%, 100%, 0.22)",
    "style_login_button_text_color": "hsla(0, 100%, 100%, 1)",
    "style_login_gradient_top_color": "hsla(18, 100%, 61%, 0.66)",
    "style_login_gradient_bottom_color": "hsla(339, 94%, 64%, 1)",
    "style_login_username_bold": true,
    "style_login_username_capitalization": "default",
    "style_login_username_color": "hsla(0, 100%, 100%, 1)",
    "style_login_username_italic": true,

    "window_border_radius": "4px",
    "window_font_size": "1em"
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
      window.notifications.generate("Reverted to previous settings, no changes saved.", "success");

      // This shouldn't be here. It is, though.
      setPageZoom(newSettings.page_zoom);

      return { ...state, "settings": newSettings };

    case 'SETTINGS_APPLY_THEME':
      var newSettings = { ...state.cachedSettings, ...action.theme };

      // Create a notification
      window.notifications.generate(`Loaded ${ action.name } theme. Remember to save!`, "success");

      // This shouldn't be here. It is, though.
      setPageZoom(newSettings.page_zoom);

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

      newSettings[action.name] = action.value;

      // This shouldn't be here. It is, though.
      setPageZoom(newSettings.page_zoom);

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

    case 'SETTINGS_TOGGLE_CONFIG':
      localStorage.setItem('use_lightdm_conf', !state.settings.use_lightdm_conf);

      var dir              = FileOperations.getWallpaperDirectory();
      var wallpaper        = Settings.requestSetting('wallpaper', 'space-1.jpg');
      var cyclerForeground = document.querySelectorAll('.wallpaper-foreground')[0];

      var newSettings = {
        ...state.settings,
        "use_lightdm_conf": !state.settings.use_lightdm_conf
      };

      for (let key in state.settings) {
        newSettings[key] = Settings.requestSetting(key, state.settings[key]);
      }

      setTimeout(() => {
        cyclerForeground.style.background = `url('${ dir }${ wallpaper }')`;
        cyclerForeground.style.backgroundPosition = "center";
        cyclerForeground.style.backgroundSize = "cover";
      }, 600);

      var newState = { ...state, "settings": newSettings };

      return newState;

    default:
      return state;
  }
};
