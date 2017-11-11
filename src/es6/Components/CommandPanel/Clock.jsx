// Clock -> Required by Components/CommandPanel
// --------------------------------------
// Just a clock.

import React from 'react';
import Strftime from 'strftime';
import PropTypes from 'prop-types';


export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;

    this.unsubscribe = this.store.subscribe(() => {
      let storeState = this.store.getState();

      this.setState({
        "storeState": storeState,
        "time_enabled": storeState.settings.time_enabled,
        "time_format": storeState.settings.time_format
      });
    });

    let storeState = this.store.getState();

    this.state = {
      "initialized": false,
      "time_enabled": storeState.settings.time_enabled,
      "time_format": storeState.settings.time_format,
      "formattedTime": "",
      "storeState": storeState
    };
  }


  componentDidMount() {
    setTimeout(() => {
      this.updateClock();
      this.setState({
        "initialized": true
      });
    }, 1000);
  }


  updateClock() {
    this.setState({
      "formattedTime": Strftime(this.state.time_format)
    });

    setTimeout(() => {
      this.updateClock();
    }, 1000);
  }


  render() {
    let classes = ['right', 'clock'];
    let currentTime = this.state.formattedTime;

    if (this.state.initialized === true && this.state.time_enabled === true) {
      classes.push('loaded');
    } else if (this.state.time_enabled === false) {
      classes.push('invisible');
    }

    return (
      <div className={ classes.join(' ') }>
        { currentTime }
      </div>
    );
  }
}


Clock.propTypes = {
  'store': PropTypes.object.isRequired
};
