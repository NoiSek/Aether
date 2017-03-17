import Inferno from 'inferno';
import { createStore } from 'redux';

import Notifications from './Utils/Notifications';
import SettingsToggler from './Components/SettingsToggler';
import CommandPanel from './Components/CommandPanel';
import LoginWindow from './Components/LoginWindow';
import DateDisplay from './Components/DateDisplay';
import UserPanel from './Components/UserPanel';
import Settings from './Components/Settings';

import { getDefaultState, PrimaryReducer } from './Reducers/PrimaryReducer';
import { addAdditionalSettings } from './Reducers/SettingsReducer';

export default function Main() {
  let initialState = getDefaultState();
  initialState = addAdditionalSettings(initialState);

  let store = createStore(PrimaryReducer, initialState);

  Inferno.render((
    <LoginWindow store={ store}>
      <CommandPanel store={ store } />
      <UserPanel store={ store } />
    </LoginWindow>
  ), document.getElementById('login-window-mount'));

  Inferno.render(<DateDisplay store={ store } />, document.getElementById("date-display"));
  Inferno.render(<Settings store={ store } />, document.getElementById("settings"));
  Inferno.render(<SettingsToggler store={ store } />, document.getElementById("settings-toggler-mount"));
}

window.onload = (e) => {
  // Add notifications to the global scope for error handling
  window.notifications = new Notifications();

  Main();
};

