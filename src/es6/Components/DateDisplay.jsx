// DateDisplay -> Required by Main
// --------------------------------------
// Displays date below the login window.

import React from 'react';
import Strftime from 'strftime';
import PropTypes from 'prop-types';


export default class DateDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;

    this.unsubscribe = this.store.subscribe(() => {
      let storeState = this.store.getState();

      this.setState({
        "storeState": storeState,
        "date_enabled": storeState.settings.date_enabled,
        "date_format": storeState.settings.date_format
      });
    });

    let storeState = this.store.getState();

    this.state = {
      "initialized": false,
      "date_enabled": storeState.settings.date_enabled,
      "date_format": storeState.settings.date_format,
      "formattedDate": "",
      "storeState": storeState
    };
  }


  componentWillMount() {
    // Wait two seconds, so that the clock can render first and they fade in sequentially rather than in parallel.
    setTimeout(() => {
      this.setDate();
    }, 2000);
  }


  setDate() {
    this.setState({
      "initialized": true,
      "formattedDate": Strftime(this.state.date_format)
    });

    setTimeout(() => {
      this.setDate();
    }, 1000);
  }


  render() {
    let dateClasses = ['date'];
    let dateString = this.state.formattedDate;

    if (this.state.initialized === true && this.state.date_enabled === true) {
      dateClasses.push('loaded');
    } else if (this.state.date_enabled === false) {
      dateClasses.push('invisible');
    }

    return (
      <div className={ dateClasses.join(' ') } dangerouslySetInnerHTML={{ "__html": dateString }} />
    );
  }
}


DateDisplay.propTypes = {
  'store': PropTypes.object.isRequired
};
