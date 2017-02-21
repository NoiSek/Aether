export const LOCALSTORAGE_ENABLED = (typeof(Storage) !== "undefined");

if (!LOCALSTORAGE_ENABLED) {
  window.notifications.generate("localStorage not supported.", 'error');
  throw("localStorage not supported. Theme unable to function.");
}

export function requestSetting(setting, default=undefined) {
  if (localStorage.getItem(setting) === null) {
    return default;
  } else {
    return localStorage.getItem(setting);
  }
}
