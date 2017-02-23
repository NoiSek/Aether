import Inferno from 'inferno';
import { createStore } from 'redux';

import Notifications from './Utils/Notifications';
import CommandPanel from './Components/CommandPanel';
import DateDisplay from './Components/DateDisplay';
import UserPanel from './Components/UserPanel';

import { getDefaultState, PrimaryReducer } from './Reducers/PrimaryReducer';
import { addAdditionalSettings } from './Reducers/SettingsReducer';

export default function Main() {
  let initialState = getDefaultState();
  initialState = addAdditionalSettings(initialState);

  let store = createStore(PrimaryReducer, initialState);

  Inferno.render(<CommandPanel store={ store } />, document.getElementById("command-panel"));
  Inferno.render(<UserPanel store={ store } />, document.getElementById("user-panel"));
  Inferno.render(<DateDisplay store={ store } />, document.getElementById("date-display"));
}

window.onload = (e) => {
  // Add notifications to the global scope for error handling
  window.notifications = new Notifications();

  Main();
};

