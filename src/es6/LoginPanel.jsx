import Inferno from 'src/dist/js/inferno.min';
import Component from 'src/dist/js/inferno-component.min';

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
        "updateDelay": false
      },
      "activeUser": undefined,
      "activeSession": undefined,
      "password": ""
    };
  }

  componentDidMount() {
    this.setDate();
    setInterval(this.setDate.bind(this), 30 * 1000);
  }

  componentWillMount() {
    let defaultUser = this.findDefaultUser();
    let defaultSession = this.findDefaultSession(defaultUser);

    this.setState({
      "activeUser": defaultUser,
      "activeSession": defaultSession
    });

    // Functions that lightdm needs
    window.show_prompt = (text, type) => {
      if (type === "text") {
        window.notifications.generate(text);
      } else if (type === "password") {
        lightdm.respond(this.state.password);
      }
    };
    window.show_message = (text, type) => {
      window.notifications.generate(text, type);
    };
    window.authentication_complete = () => {
      if (lightdm.is_authenticated) {
        lightdm.start_session_sync(this.state.activeSession.key);
      }
    };
    window.autologin_timer_expired = () => {
      window.notifications.generate(text, type);
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

  handleLoginSubmit(event) {
    event.preventDefault();
    lightdm.authenticate(this.state.activeUser.name);
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
      "activeSession": session
    });
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
    let dayName = dayNames[dayValue];
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
  }

  generateDateString() {
    let date = this.state.date;
    let dateString = false;

    if (date.initialized === true) {
      dateString = (
        <span>
          <em>{ date.dayName }</em>, the <em>{ date.formattedDayValue }</em> of <em>{ date.monthName }</em>
        </span>
      );
    }

    // Cycle through a render pass once in order for the fadeIn animation to play properly.
    if (date.updateDelay === false) {
      setTimeout(() => {
        date.updateDelay = true;
        this.setState({
          "date": date
        });
      }, 100);
    }

    return dateString;
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
        eventHandler = false;
        classes.push("active");
      }

      return (
        <div className={ classes.join(' ') } key={ session.key } onClick={ eventHandler }>{ session.name }</div>
      );
    });

    return (
      <div className="dropdown user-session">
        { rows }
      </div>
    );
  }

  generateSwitchUserButton() {
    let classes = ['left'];

    let eventHandler = () => {
      alert("Not yet implemented! Complain on Github!");
    };

    if (window.lightdm.users.length < 20) {
      eventHandler = false;
      classes.push("disabled");
    }

    return (
      <div className={ classes.join(' ') } onClick={ eventHandler }>SWITCH USER</div>
    );
  }

  render() {
    let dateClasses = ["right", "date"];
    let dateString = this.generateDateString();

    if (this.state.date.initialized === true && this.state.date.updateDelay === true) {
      dateClasses.push("loaded");
    }

    let sessionDropdown = this.generateSessionDropdown();
    let switchUserButton = this.generateSwitchUserButton();

    return (
      <div>
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
            <input 
              type="password" 
              placeholder="*******************" 
              className="user-password" 
              value={ this.state.password }
              onChange={ this.handlePasswordInput.bind(this) }
            />
          </div>
          <div className="submit-row">
            <div className="left">
              { sessionDropdown }
            </div>
            <div className="right">
              <input type="submit" value="GO" className="submit-button" />
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
    );
  }
}