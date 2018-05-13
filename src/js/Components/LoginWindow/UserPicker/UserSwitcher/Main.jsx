// UserSwitcher -> Required by Components/UserPanel
// --------------------------------------
// Handles (poorly) the task of switching between
// multiple users on the same system.

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const FADE_DURATION = 200;


class UserSwitcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "fadeOut": false,
      "selectedUser": this.props.activeUser,
      "selectedUserIndex": window.lightdm.users.indexOf(this.props.activeUser)
    };
  }


  handleBackButton(event) {
    this.props.setActiveUser(this.state.selectedUser);

    this.setState({
      "fadeOut": true
    });

    setTimeout(() => {
      this.setState({
        "fadeOut": false
      });
    }, FADE_DURATION);
  }


  handleUserClick(index) {
    this.setState({
      "selectedUser": window.lightdm.users[index],
      "selectedUserIndex": index
    });
  }


  generateUserList() {
    let activeIndex = this.state.selectedUserIndex;

    let avatarBackgroundClasses;

    if(this.props.avatarEnabled) {
      avatarBackgroundClasses = 'avatar-background';
    } else {
      avatarBackgroundClasses = 'avatar-background avatar-background-hidden';
    }

    let avatars = window.lightdm.users.map((user, index) => {
      let classes = ['avatar-container'];

      if (index === activeIndex) {
        classes.push('active');
      }

      if (index === activeIndex - 1) {
        classes.push('previous');
      }

      if (index === activeIndex + 1) {
        classes.push('next');
      }

      return (
        <li className={ classes.join(' ') } onClick={ this.handleUserClick.bind(this, index) } key={ user.display_name || user.real_name }>
          <div className={ avatarBackgroundClasses }>
            <div className="avatar-mask">
              <img className="user-avatar" src={ user.image } />
            </div>
          </div>
          <div className="avatar-name">
            <div className="username">{ user.display_name }</div>
            <div className="real-name">{ user.real_name }</div>
          </div>
        </li>
      );
    });

    // Very hacky. Add an extra copy of the last element to the beginning of the list
    // if the first element in the list is currently selected.
    if (activeIndex === 0) {
      let user = window.lightdm.users[window.lightdm.users.length - 1];
      avatars.splice(0, 0,
        <li className="avatar-container previous" onClick={ this.handleUserClick.bind(this, window.lightdm.users.length - 1) } key="ecopy1">
          <div className={ avatarBackgroundClasses }>
            <div className="avatar-mask">
              <img className="user-avatar" src={ user.image } />
            </div>
          </div>
          <div className="avatar-name">
            <div className="username">{ user.display_name }</div>
            <div className="real-name">{ user.real_name }</div>
          </div>
        </li>
      );
    }

    // Very hacky. Add an extra copy of the first element to the end of the list
    // if the last element in the list is currently selected.
    if (activeIndex === window.lightdm.users.length - 1) {
      let user = window.lightdm.users[0];
      avatars.push(
        <li className="avatar-container next" onClick={ this.handleUserClick.bind(this, 0) } key="ecopy2">
          <div className={ avatarBackgroundClasses }>
            <div className="avatar-mask">
              <img className="user-avatar" src={ user.image } />
            </div>
          </div>
          <div className="avatar-name">
            <div className="username">{ user.display_name }</div>
            <div className="real-name">{ user.real_name }</div>
          </div>
        </li>
      );
    }

    return (
      <ul className="avatar-slider">
        { avatars }
      </ul>
    );
  }


  render() {
    let classes = ['login-panel-switcher'];

    let userList = this.generateUserList();
    let userCount = window.lightdm.users.length;

    if (this.props.active === true) {
      classes.push('active');
    } else if (this.state.fadeOut === true) {
      classes.push('fadeout');
    }

    return (
      <div className={ classes.join(' ') }>
        <div className="header">User <em>{ this.state.selectedUserIndex + 1 }</em> of <em>{ userCount }</em></div>
        { userList }
        <div className="bottom" onClick={ this.handleBackButton.bind(this) }>
          <div className="left">BACK</div>
        </div>
      </div>
    );
  }
}


UserSwitcher.propTypes = {
  'active': PropTypes.bool.isRequired,
  'activeUser': PropTypes.object.isRequired,
  'setActiveUser': PropTypes.func.isRequired,
  'avatarEnabled': PropTypes.bool.isRequired
};


export default connect(
  (state) => {
    return {
      'activeUser': state.user,
      'avatarEnabled': state.settings.avatar_background_enabled
    };
  },
  null
)(UserSwitcher);
