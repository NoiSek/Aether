// LoginWindow -> Required by Main
// --------------------------------------
// Style / Composition wrapper.

import cxs from 'cxs';
import React from 'react';
import PropTypes from 'prop-types';


// We don't really need or desire to hold state, here, but it is
// necessary for this to be a component in order to force updates
// from the settings dialogue.

export default class LoginWindow extends React.Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;

    this.unsubscribe = this.store.subscribe(() => {
      this.setState({
        "storeState": this.store.getState(),
        "_toggleUpdate": !this.state._toggleUpdate
      });
    });

    this.state = {
      "_toggleUpdate": false,
      "storeState": this.store.getState()
    };
  }

  render() {
    let settings = this.state.storeState.settings;
    let style = cxs({
      "border-radius": settings.window_border_radius,
      "font-size": settings.window_font_size
    });

    return (
      <div className={ `login-window ${ style }` }>
        { this.props.children }
      </div>
    );
  }
}


LoginWindow.propTypes = {
  'store': PropTypes.object.isRequired,
  'children': PropTypes.array.isRequired
};
