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
      }
    };
  }

  componentDidMount() {
    this.setDate();
    setInterval(this.setDate.bind(this), 30 * 1000);
  }

  setDate() {
    console.log("Running setDate");
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

  render() {
    let dateClasses = ["right", "date"];
    let dateString = this.generateDateString();

    if (this.state.date.initialized === true && this.state.date.updateDelay === true) {
      dateClasses.push("loaded");
    }

    return (
      <div>
        <div className="avatar-container">
          <div className="avatar-background">
            <img className="user-avatar" src="src/img/default-user.png" />
          </div>
        </div>
        <form className="login-form">
          <div className="user-username">LannisterX</div>
          <div className="user-password-container">
            <input type="password" placeholder="*******************" className="user-password" />
          </div>
          <div className="submit-row">
            <div className="left">
              <div className="dropdown user-session">
                <div className="dropdown-item active">deepin</div>
                <div className="dropdown-item">gnome</div>
                <div className="dropdown-item">xfce</div>
              </div>
            </div>
            <div className="right">
              <input type="submit" value="GO" className="submit-button" />
            </div>
          </div>
        </form>
        <div className="bottom">
          <div className="left">SWITCH USER</div>
          <div className={ dateClasses.join(' ') }>
            { dateString }
          </div>
        </div>
      </div>
    );
  }
}