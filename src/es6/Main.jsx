import Inferno from 'inferno.min';
import Component from 'inferno-component.min';
import InfernoDOM from 'inferno-dom.min';

import Notifications from './Notifications';
import CommandPanel from './CommandPanel';
import LoginPanel from './LoginPanel';

export default function Main() {
  // Add notifications to the global scope for error handling
  window.notifications = new Notifications();

  InfernoDOM.render(<CommandPanel />, document.getElementById("command-panel"));
  InfernoDOM.render(<LoginPanel />, document.getElementById("login-panel"));
}

Main();