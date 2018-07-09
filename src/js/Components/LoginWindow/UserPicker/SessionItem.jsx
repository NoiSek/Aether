// SessionItem -> Required by Components/UserPanel/SessionSelector
// --------------------------------------
// Just one session to choose from

import PropTypes from 'prop-types';
import React from 'react';
import cxs from "cxs";

class SessionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick(this.props.session.key);
  }

  render() {
    let classes = ['login-session-item', this.props.typeClass];
    classes.push(cxs({
      "background-color": this.props.buttonColor
    }));

    return (
      <div className={ classes.join(' ') } onClick={ this.handleClick.bind(this) }>
        <div className='text'>{ this.props.session.name }</div>
      </div>
    );
  }
}

SessionItem.propTypes = {
  'buttonColor': PropTypes.string.isRequired,
  'session': PropTypes.object.isRequired,
  'handleClick': PropTypes.func.isRequired,
  'typeClass': PropTypes.string.isRequired
};

export default SessionItem;
