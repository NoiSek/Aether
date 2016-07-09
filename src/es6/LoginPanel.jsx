import Inferno from 'src/dist/js/inferno.min';
import Component from 'src/dist/js/inferno-component.min';

import { UserSwitcher } from './UserSwitcher';

const ERROR_SHAKE_DURATION = 600;

export class LoginPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "date": {
        "formattedString": undefined,
        "initialized": false,
        "dayName": undefined,
        "dayValue": undefined,
        "formattedDayValue": undefined,
        "monthName": undefined,
        "monthValue": undefined,
      },
      "activeUser": undefined,
      "activeSession": undefined,
      "dropdownActive": false,
      "password": "",
      "passwordFailed": false,
      "switcherActive": false
    };
  }

  componentWillMount() {
    let defaultUser = this.findDefaultUser();
    let defaultSession = this.findDefaultSession(defaultUser);

    this.setState({
      "activeUser": defaultUser,
      "activeSession": defaultSession
    });

    // Wait two seconds, so that the clock can render first and they fade in sequentially rather than in parallel.
    setTimeout(() => {
      this.setDate();
      
      let date = this.state.date;
      date.initialized = true;

      this.setState({
        "date": date
      });
    }, 2000);

    // Define functions required in the global scope by LightDM.
    window.show_prompt = (text, type) => {
      if (type === "text") {
        window.notifications.generate(text);
      } else if (type === "password") {
        window.lightdm.respond(this.state.password);
      }
    };
    window.show_message = (text, type) => {
      window.notifications.generate(text, type);
    };
    window.authentication_complete = () => {
      if (window.lightdm.is_authenticated) {
        window.lightdm.start_session_sync(this.state.activeSession.key);
      } else {
        this.rejectPassword();
      }
    };
    window.autologin_timer_expired = () => {
      window.notifications.generate("Autologin expired.");
    };
  }

  findDefaultUser() {
    if (window.lightdm.lock_hint === true) {
      return window.lightdm.users.filter((user) => user.logged_in)[0];
    } else {
      if(this.state.activeUser !== undefined) {
        return this.state.activeUser;
      } else if (window.lightdm.select_user !== undefined && window.lightdm.select_user !== null) {
        window.lightdm.users.filter((user) => user.name === window.lightdm.select_user)[0];
      } else {
        return window.lightdm.users[0];
      }
    }
  }

  findDefaultSession(user) {
    return this.findSession(window.lightdm.default_session) || this.findSession(user.session) || window.lightdm.sessions[0];
  }

  findSession(sessionName) {
    if (sessionName === undefined) {
      return false;
    }
    return window.lightdm.sessions.filter((session) => session.name.toLowerCase() === sessionName.toLowerCase() || session.key.toLowerCase() === sessionName.toLowerCase())[0];
  }

  handleDropdownClick(event) {
    this.setState({
      "dropdownActive": true
    });
  }

  handleDropdownLeave(event) {
    this.setState({
      "dropdownActive": false
    });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    window.lightdm.authenticate(this.state.activeUser.name);
  }

  handleSwitcherClick(event) {
    if (window.lightdm.users.length < 2) {
      window.notifications.generate("You are the only user that is able to log in on this system.", 'error');
      return false;
    } else if (window.lightdm.users.length === 2) {
      // No point in showing them the switcher if there is only one other user. Switch immediately.
      let otherUser = window.lightdm.users.filter((user) => {
        return user.name !== this.state.activeUser.name;
      })[0];

      this.setActiveUser(otherUser);
      window.notifications.generate("User has been automatically switched to the only other user on this system.");
    } else {
      this.setState({
        "switcherActive": true
      });
    }
  }

  handlePasswordInput(event) {
    this.setState({
      "password": event.target.value
    });
  }

  setActiveSession(session) {
    if (typeof session === typeof String()) {
      session = this.findSession(session);
    }

    this.setState({
      "activeSession": session,
      "dropdownActive": false
    });
  }

  setActiveUser(user) {
    this.setState({
      "activeUser": user,
      "switcherActive": false
    });
  }

  rejectPassword() {    
    if(this.state.passwordFailed === false) {
      window.notifications.generate("Password incorrect, please try again.", 'error');

      this.setState({
        "password": "",
        "passwordFailed": true
      });

      setTimeout(() => {
        this.setState({
          "passwordFailed": false
        });
      }, ERROR_SHAKE_DURATION);
    }
  }

  setDate() {
    let dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    let now = new Date();

    let dayValue = now.getDate();
    let dayName = dayNames[now.getUTCDay()];
    let monthValue = now.getMonth();
    let monthName = monthNames[monthValue];

    let formattedDayValue;

    if (4 <= dayValue <= 20 || 24 <= dayValue <= 30) {
      formattedDayValue = dayValue + "th";
    } else {
      formattedDayValue = dayValue + ["st", "nd", "rd"][dayValue % 10 - 1];
    }

    let formattedDateString = `<em>${dayName}</em>, the <em>${formattedDayValue}</em> of <em>${monthName}</em>`;
    
    let date = this.state.date;
    date.formattedString = formattedDateString;
    date.initialized = true;

    date.dayName = dayName;
    date.dayValue = dayValue;
    date.formattedDayValue = formattedDayValue;
    date.monthName = monthName;
    date.monthValue = monthValue;

    this.setState({
      "date": date
    });

    setTimeout(() => {
      this.setDate();
    }, 30 * 1000);
  }

  generateDateString() {
    let date = this.state.date;
    
    let dateString = (
      <span>
        <em>{ date.dayName }</em>, the <em>{ date.formattedDayValue }</em> of <em>{ date.monthName }</em>
      </span>
    );

    return dateString;
  }

  generatePasswordField() {
    let classes = ['user-password'];

    if (this.state.passwordFailed === true) {
      classes.push('error');
    }

    return (
      <input 
        type="password" 
        placeholder="*******************" 
        className={ classes.join(' ') } 
        value={ this.state.password }
        onChange={ this.handlePasswordInput.bind(this) }
      />
    );
  }

  generateSessionDropdown() {
    // Sort by active, then alphabetical. 
    // Doing this requires using sort in reverse.
    let rows = window.lightdm.sessions
    .sort((a, b) => {
      return a.name.toUpperCase() > b.name.toUpperCase();
    })
    .sort((a, b) => {
      return (b.key.toLowerCase() === this.state.activeSession.key.toLowerCase()) ? 1 : -1;
    })
    .map((session) => {
      let classes = ["dropdown-item"];
      let eventHandler = this.setActiveSession.bind(this, session.key);

      if (session.key === this.state.activeSession.key) {
        eventHandler = this.handleDropdownClick.bind(this);
        classes.push("active");
      }

      return (
        <div className={ classes.join(' ') } key={ session.key } onClick={ eventHandler }>{ session.name }</div>
      );
    });

    let classes = ['dropdown', 'user-session'];

    if (this.state.dropdownActive) {
      classes.push('active');
    }

    return (
      <div className={ classes.join(' ') } onMouseLeave={ this.handleDropdownLeave.bind(this) }>
        { rows }
      </div>
    );
  }

  generateSwitchUserButton() {
    let classes = ['left'];

    if (window.lightdm.users.length < 2) {
      classes.push("disabled");
    }

    return (
      <div className={ classes.join(' ') } onClick={ this.handleSwitcherClick.bind(this) }>SWITCH USER</div>
    );
  }

  render() {
    // Do as I say, not as I do. 
    // Having to generate this many sections is a strong indicator that they should be sub-components instead, 
    // but they are remaining here for good reason. As a login screen, fewer dependencies to load is preferable to readability.
    let loginPanelClasses = ['login-panel-main'];
    let dateClasses = ["right", "date"];
    let dateString = this.generateDateString();

    if (this.state.switcherActive === true) {
      loginPanelClasses.push('fadeout');
    }

    if (this.state.date.initialized === true) {
      dateClasses.push("loaded");
    }

    let passwordField = this.generatePasswordField();
    let sessionDropdown = this.generateSessionDropdown();
    let switchUserButton = this.generateSwitchUserButton();

    return (
      <div className="login-panel-contents">
        <div className={ loginPanelClasses.join(' ') }>
          <div className="avatar-container">
            <div className="avatar-background">
              <div className="avatar-mask">
                <img className="user-avatar" src={ this.state.activeUser.image } />
              </div>
            </div>
          </div>
          <form className="login-form" onSubmit={ this.handleLoginSubmit.bind(this) }>
            <div className="user-username">{ this.state.activeUser.display_name }</div>
            <div className="user-password-container">
              { passwordField }
            </div>
            <div className="submit-row-container">
              <div className="submit-row">
                <div className="left">
                  { sessionDropdown }
                </div>
                <div className="right">
                  <input type="submit" value="GO" className="submit-button" />
                </div>
              </div>
            </div>
          </form>
          <div className="bottom">
            { switchUserButton }
            <div className={ dateClasses.join(' ') }>
              { dateString }
            </div>
          </div>
        </div>
        <UserSwitcher 
          active={ this.state.switcherActive }
          activeUser={ this.state.activeUser }
          setActiveUser={ this.setActiveUser.bind(this) } 
        />
      </div>
    );
  }
}