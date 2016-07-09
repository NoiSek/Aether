import Inferno from 'src/dist/js/inferno.min';
import Component from 'src/dist/js/inferno-component.min';
import InfernoDOM from 'src/dist/js/inferno-dom.min';

// For some reason, this loader requires that libraries be loaded here in order for them to work elsewhere.
import { WallpaperSwitcher } from './WallpaperSwitcher';
import { Notifications } from './Notifications';
import { CommandPanel } from './CommandPanel';
import { LoginPanel } from './LoginPanel';
import { Clock } from './Clock';

export const BACKGROUNDS = [
  'abstract.jpg',
  'boko.jpg',
  'car.jpg',
  'cavern.jpg',
  'dark-grass.jpg',
  'frosted.jpg',
  'jet.jpg',
  'mountains-1.jpg',
  'mountains-2.png',
  'mountains-3.jpg',
  'night.png',
  'ocean.jpg',
  'paper-lanterns.jpg',
  'pier.jpg',
  'sanfran.jpg',
  'space-1.jpg',
  'space-2.jpg',
  'space-3.jpg',
  'tree.jpg'
];

export default function Main() {
  // Add notifications to the global scope for error handling
  window.notifications = new Notifications();

  InfernoDOM.render(<CommandPanel backgrounds={ BACKGROUNDS } />, document.getElementById("command-panel"));
  InfernoDOM.render(<LoginPanel />, document.getElementById("login-panel"));
}

// User Switcher
// Password handling
// Lock screen