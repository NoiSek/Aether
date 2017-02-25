// Settings -> Required by Reducers/PrimaryReducer
// --------------------------------------
// Handles manipulation of greeter settings, and
// provides wrapper functions around localstorage.

export const LOCALSTORAGE_ENABLED = (typeof(Storage) !== "undefined");

if (!LOCALSTORAGE_ENABLED) {
  window.notifications.generate("localStorage not supported.", 'error');
  throw("localStorage not supported. Theme unable to function.");
}

export function requestSetting(setting, defaultSetting=undefined) {
  let result = localStorage.getItem(setting);

  if (result === null || result === undefined) {
    return defaultSetting;
  } else {
    // Cast string values to booleans if necessary.
    if (result === "true" || result === "false") {
      return (result === "true") ? true : false;
    }

    return result;
  }
}

export function saveSetting(setting, value=undefined) {
  localStorage.setItem(setting, value);
}
