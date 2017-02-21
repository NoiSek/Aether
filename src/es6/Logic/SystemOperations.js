export function handleCommand(command, disabled, event) {
  if (disabled !== false) {
    window.notifications.generate(`${command} is disabled on this system.`, "error");
    return false;
  }

  if (command === "shutdown") {
    window.notifications.generate("Shutting down.");
    window.lightdm.shutdown();
  } else if (command === "hibernate") {
    window.notifications.generate("Hibernating system.");
    window.lightdm.hibernate();
  } else if (command === "reboot") {
    window.notifications.generate("Rebooting system.");
    window.lightdm.restart();
  } else if (command === "sleep") {
    window.notifications.generate("Suspending system.");
    window.lightdm.suspend();
  }
}

export function findInitialUser() {
  // Are we currently in a lock screen?
  if (window.lightdm.lock_hint === true) {
    // Default to the very first logged in user.
    return window.lightdm.users.filter((user) => user.logged_in)[0];
  }

  else {
    if (window.lightdm.select_user_hint !== undefined && window.lightdm.select_user_hint !== null) {
      window.lightdm.users.filter((user) => user.username === window.lightdm.select_user_hint)[0];
    } else {
      return window.lightdm.users[0];
    }
  }
}

export function findInitialSession(user) {
  return (
    this.findSession(user.session) ||
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
