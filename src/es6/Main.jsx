import Inferno from 'inferno';
import Component from 'inferno-component';
import InfernoDOM from 'inferno-dom';

import Notifications from './Utils/Notifications';
import CommandPanel from './Components/CommandPanel';
import DateDisplay from './Components/DateDisplay';
import LoginPanel from './Components/LoginPanel';

import { getInitialAppState } from "./Reducers/PrimaryReducer";
import { addAdditionalSettings } from "./Reducers/SettingsReducer";

export default function Main() {
  getInitialAppState().then((initialState) => {
    initialState = addAdditionalSettings(initialState);

    InfernoDOM.render(<CommandPanel />, document.getElementById("command-panel"));
    InfernoDOM.render(<LoginPanel />, document.getElementById("login-panel"));
    InfernoDOM.render(<DateDisplay />, document.getElementById("date-display"));
  });
}

// Add notifications to the global scope for error handling
window.notifications = new Notifications();

Main();
