import * as Settings from "../Logic/Settings";

export function addAdditionalSettings(state) {
  // Define our defaults
  let defaults = {
    "distro": "archlinux",

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

  return { ...state, "settings": settings };
}
