import Inferno from 'src/dist/js/inferno.min';
import Component from 'src/dist/js/inferno-component.min';

// I hope nobody who uses this actually has to switch users regularly, this is terrible.

export class UserSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "selectedUser": this.props.activeUser,
      "selectedUserIndex": window.lightdm.users.indexOf(this.props.activeUser)
    };
  }

  handleUserClick(index) {
    this.setState({
      "selectedUser": window.lightdm.users[index],
      "selectedUserIndex": index
    });
  }

  generateUserList() {
    let activeIndex = this.state.selectedUserIndex;

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
        <li className={ classes.join(' ') } onClick={ this.handleUserClick.bind(this, index) }>
          <div className="avatar-background">
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
        <li className='avatar-container previous' onClick={ this.handleUserClick.bind(this, window.lightdm.users.length - 1) }>
          <div className="avatar-background">
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
        <li className='avatar-container next' onClick={ this.handleUserClick.bind(this, 0) }>
          <div className="avatar-background">
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
      <ul class="avatar-slider">
        { avatars }
      </ul>
    );
  }

  render() {
    let classes = ['login-panel-switcher'];
    let dateClasses = ['right', 'date'];

    let userList = this.generateUserList();
    let userCount = window.lightdm.users.length;
    
    let [ dateInitialized, dateString ] = this.props.date;

    if (this.props.active === true) {
      classes.push("active");
    }

    if (dateInitialized === true) {
      dateClasses.push('loaded');
    }

    return (
      <div className={ classes.join(' ') }>
        <div className="header">User <em>{ this.state.selectedUserIndex + 1 }</em> of <em>{ userCount }</em></div>
        { userList }
        <div className="bottom" onClick={ this.props.setActiveUser.bind(this, this.state.selectedUser) }>
          <div className="left">BACK</div>
          <div className={ dateClasses.join(' ') }>{ dateString }</div>
        </div>
      </div>
    );
  }
}