// SessionItem -> Required by Components/UserPanel/SessionSelector
// --------------------------------------
// Just one session to choose from

import PropTypes from 'prop-types';
import React from 'react';
import cxs from "cxs";

const ANIMATION_DURATION = 100;


class SessionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick(this.props.session.key);
  }

  render() {
    let classes = ['login-session-item'];

    classes.push(cxs({
      "color":  this.props.buttonTextColor,
      "background-color": this.props.buttonBackgroundColor,
      "animation-delay": `${ this.props.index * ANIMATION_DURATION }ms !important`
    }));

    return (
      <div className="_transform-wrapper">
        <div className={ classes.join(' ') } onClick={ this.handleClick.bind(this) }>
          <div className='text'>{ this.props.session.name }</div>
        </div>
      </div>
    );
  }
}

SessionItem.propTypes = {
  'buttonBackgroundColor': PropTypes.string.isRequired,
  'buttonTextColor': PropTypes.string.isRequired,
  'session': PropTypes.object.isRequired,
  'handleClick': PropTypes.func.isRequired,
  'index': PropTypes.number.isRequired,
  'settings': PropTypes.object.isRequired
};

export default SessionItem;
