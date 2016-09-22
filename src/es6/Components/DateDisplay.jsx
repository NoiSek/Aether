import Inferno from 'inferno.min';
import Component from 'inferno-component.min';

export default class DateDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "formattedString": undefined,
      "initialized": false,
      "dayName": undefined,
      "dayValue": undefined,
      "formattedDayValue": undefined,
      "monthName": undefined,
      "monthValue": undefined
    };
  }

  componentWillMount() {
    // Wait two seconds, so that the clock can render first and they fade in sequentially rather than in parallel.
    setTimeout(() => {
      this.setDate();
    }, 2000);
  }

  generateDateString() {
    let dateString = (
      <span>
        <em>{ this.state.dayName }</em>, the <em>{ this.state.formattedDayValue }</em> of <em>{ this.state.monthName }</em>
      </span>
    );

    return dateString;
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

    // Because Javascript is terrible, (x <= y <= z) becomes ((x <= y) && (y <= z))
    if ( ((4 <= dayValue) && (dayValue <= 20)) || ((24 <= dayValue) && (dayValue <= 30)) ) {
      formattedDayValue = dayValue + "th";
    } else {
      formattedDayValue = dayValue + ["st", "nd", "rd"][dayValue % 10 - 1];
    }

    let formattedDateString = `<em>${dayName}</em>, the <em>${formattedDayValue}</em> of <em>${monthName}</em>`;

    this.setState({
      "formattedString": formattedDateString,
      "initialized": true,
      "dayName": dayName,
      "dayValue": dayValue,
      "formattedDayValue": formattedDayValue,
      "monthName": monthName,
      "monthValue": monthValue
    });

    setTimeout(() => {
      this.setDate();
    }, 30 * 1000);
  }

  render() {
    let dateClasses = ["date"];
    let dateString = this.generateDateString();

    if (this.state.initialized === true) {
      dateClasses.push("loaded");
    }

    return (
      <div className={ dateClasses.join(' ') }>
        { dateString }
      </div>
    );
  }
}
