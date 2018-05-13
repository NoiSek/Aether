import { SettingsReducer } from "./SettingsReducer";
import * as SystemOperations from "../Logic/SystemOperations";

export function getDefaultState() {
  return {
    "info": {
      "hostname": window.lightdm.hostname,
      "language": window.lightdm.language
    },
    "user": SystemOperations.findInitialUser(),
    "session": SystemOperations.findInitialSession()
  };
}

export const PrimaryReducer = (state, action) => {
  if (action.type.startsWith("SETTINGS")) {
    return SettingsReducer(state, action);
  }

  switch (action.type) {
    case "AUTH_SET_ACTIVE_SESSION":
      var session = action.session;

      if (typeof session === typeof String()) {
        session = SystemOperations.findSession(session);
      }

      return { ...state, "session": session };

    case "AUTH_SET_ACTIVE_USER":
      return { ...state, "user": action.user };

    default:
      return state;
  }
};
