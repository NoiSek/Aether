import Inferno from 'src/dist/js/inferno.min';
import Component from 'src/dist/js/inferno-component.min';
import InfernoDOM from 'src/dist/js/inferno-dom.min';

import { Notifications } from './Notifications';
import { CommandPanel } from './CommandPanel';
import { LoginPanel } from './LoginPanel';
import { Clock } from './Clock';

export default function Main() {
  let backgrounds = ['abstract-1.jpg', 'boko.jpg', 'car.jpg', 'cavern.jpg', 'dark-grass.jpg', 'frosted.jpg', 'jet.png', 'mountains-1.jpg', 'night.png', 'ocean.jpg', 'paper-lanterns.jpg', 'pier.jpg', 'sanfran.jpg', 'space-1.jpg', 'space-3.jpg', 'space-4.jpg', 'tree-2.jpg'];
  
  // Add notifications to the global scope for error handling
  window.notifications = new Notifications();

  if (typeof(Storage) !== "undefined") {
    if (localStorage.getItem("wallpaper") === null) {
      localStorage.setItem("wallpaper", "space-1.jpg");  
    } else {
      // Stuff
    }    
  } else {
    window.notifications.generate("localStorage not supported.", 'error');
  }

  InfernoDOM.render(<CommandPanel />, document.getElementById("command-panel"))
  InfernoDOM.render(<LoginPanel />, document.getElementById("login-panel"));
}
