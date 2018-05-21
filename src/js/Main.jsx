import 'sass/style.sass';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LoginWindow from './Components/LoginWindow';
import Notifications from './Utils/Notifications';

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
      <LoginWindow />
    </Provider>,
    document.getElementById('login-window-mount')
  );
}


window.onload = (e) => {
  // Add notifications to the global scope for error handling
  window.notifications = new Notifications();

  let init = () => {
    Main();
    document.getElementById("password-field").focus();
  };

  if (window.__debug === false) {
    $(window).on('GreeterReady', () => {
      init();
    });
  } else {
    init();
  }
};

