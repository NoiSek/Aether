// LoginWindow -> Required by Main
// --------------------------------------
// Style / Composition wrapper.

import cxs from 'cxs';
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import UserPicker from './UserPicker';
import Settings from 'Components/Settings';
import DateDisplay from 'Components/DateDisplay';
import SettingsToggler from 'Components/SettingsToggler';
import ExperimentalStars from 'Components/ExperimentalStars';


class LoginWindow extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    document.getElementById('preloader').className += 'loaded';
  }


  render() {
    const settings = this.props.settings;

    let style = cxs({
      "border-radius": settings.window_border_radius,
      "font-size": settings.window_font_size
    });

    return [
      <div className={ `login-window ${ style }` } key='login-window'>
        <Sidebar />
        <UserPicker />
      </div>,

      <DateDisplay key='date-display' />,
      <Settings key='settings-window' />,
      <SettingsToggler key='settings-button' />,
      <If condition={ this.props.settings.experimental_stars_enabled }  key='experimental-stars-wrap' >
        <ExperimentalStars key='experimental-stars' />
      </If>,
    ];
  }
}


LoginWindow.propTypes = {
  'settings': PropTypes.object.isRequired,
};


export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(LoginWindow);
