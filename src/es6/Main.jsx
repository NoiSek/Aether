import Inferno from 'src/dist/js/inferno.min';
import Component from 'src/dist/js/inferno-component.min';
import InfernoDOM from 'src/dist/js/inferno-dom.min';

import { Notifications } from './Notifications';
import { CommandPanel } from './CommandPanel';
import { LoginPanel } from './LoginPanel';

export default function Main() {
  // Add notifications to the global scope for error handling
  window.notifications = new Notifications();

  InfernoDOM.render(<CommandPanel />, document.getElementById("command-panel"))
  InfernoDOM.render(<LoginPanel />, document.getElementById("login-panel"));
}