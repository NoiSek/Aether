// SystemOperations -> Required by Reducers/PrimaryReducer
// --------------------------------------
// Wraps LightDM system operations, and handles the heavy
// lifting of the more complex LightDM requests.

function executeCommand(message, boundFunction) {
  window.notifications.generate(message);

  setTimeout(() => {
    boundFunction();
  }, 1000);

  return true;
}


export function handleCommand(command) {
  // What the hell is this, right?
  if (command === "shutdown" && window.lightdm.can_shutdown) {
    return executeCommand("Shutting down", window.lightdm.shutdown);
  } else if (command === "hibernate" && window.lightdm.can_hibernate) {
    return executeCommand("Hibernating system.", window.lightdm.hibernate);
  } else if (command === "reboot" && window.lightdm.can_restart) {
    return executeCommand("Rebooting system.", window.lightdm.restart);
  } else if (command === "sleep" && window.lightdm.can_suspend) {
    return executeCommand("Suspending system.", window.lightdm.suspend);
  }

  // If we have gotten this far, it's because the command is disabled or doesn't exist.
  window.notifications.generate(`${ command } is disabled on this system.`, "error");
}


export function findInitialUser() {
  // Are we currently in a lock screen?
  if (window.lightdm.lock_hint === true) {
    // Default to the very first logged in user.
    return window.lightdm.users.filter((user) => user.logged_in)[0];
  }

  else {
    if (window.lightdm.select_user_hint !== undefined && window.lightdm.select_user_hint !== null) {
      return window.lightdm.users.filter((user) => user.username === window.lightdm.select_user_hint)[0];
    } else {
      return window.lightdm.users[0];
    }
  }
}


export function findInitialSession(user) {
  let userSession = (user === undefined) ? undefined : user.session;

  return (
    this.findSession(userSession) ||
    this.findSession(window.lightdm.default_session) ||
    window.lightdm.sessions[0]
  );
}


export function findSession(sessionName) {
  if (sessionName === undefined || sessionName === null) {
    return false;
  }

  return window.lightdm.sessions.filter((session) =>
    (session.name.toLowerCase() === sessionName.toLowerCase()) ||
    (session.key.toLowerCase() === sessionName.toLowerCase())
  )[0];
}
