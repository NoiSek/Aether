// Clock -> Required by Components/CommandPanel
// --------------------------------------
// Just a clock.

import React from 'react';
import Strftime from 'strftime';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';


class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "initialized": false,
      "formattedTime": "",
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
      "formattedTime": Strftime(this.props.settings.time_format)
    });

    setTimeout(() => {
      this.updateClock();
    }, 1000);
  }


  render() {
    let classes = ['right', 'clock'];
    let currentTime = this.state.formattedTime;

    if (this.state.initialized === true && this.props.settings.time_enabled === true) {
      classes.push('loaded');
    } else if (this.props.settings.time_enabled === false) {
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
  'settings': PropTypes.object.isRequired
};


export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(Clock);
