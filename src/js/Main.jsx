import 'sass/style.sass';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import UserPicker from './Components/LoginWindow/UserPicker';
import SettingsToggler from './Components/SettingsToggler';
import Sidebar from './Components/LoginWindow/Sidebar';
import LoginWindow from './Components/LoginWindow';
import DateDisplay from './Components/DateDisplay';
import Notifications from './Utils/Notifications';
import Settings from './Components/Settings';

import { getDefaultState, PrimaryReducer } from './Reducers/PrimaryReducer';
import { addAdditionalSettings } from './Reducers/SettingsReducer';

export default function Main() {
  let initialState = getDefaultState();
  initialState = addAdditionalSettings(initialState);

  let store;

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    store = createStore(
      PrimaryReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    store = createStore(PrimaryReducer, initialState);
  }

  ReactDOM.render(
    <Provider store={ store }>
      <LoginWindow>
        <Sidebar />
        <UserPicker />
      </LoginWindow>

      <DateDisplay />
      <Settings />
      <SettingsToggler />
    </Provider>,
    document.getElementById('login-window-mount')
  );
}

window.onload = (e) => {
  // Add notifications to the global scope for error handling
  window.notifications = new Notifications();

  Main();
  document.getElementById("password-field").focus();
};

