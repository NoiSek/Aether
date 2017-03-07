// DateDisplay -> Required by Main
// --------------------------------------
// Displays date below the login window.

import Inferno from 'inferno';
import Strftime from "strftime";
import Component from 'inferno-component';


export default class DateDisplay extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
    this.storeState = this.store.getState();

    this.unsubscribe = this.store.subscribe(() => {
      this.storeState = this.store.getState();

      this.setState({
        "date_enabled": this.storeState.settings.date_enabled,
        "date_format": this.storeState.settings.date_format
      });
    });

    this.state = {
      "initialized": false,
      "date_enabled": this.storeState.settings.date_enabled,
      "date_format": this.storeState.settings.date_format,
      "formattedDate": ""
    };
  }


  componentWillMount() {
    // Wait two seconds, so that the clock can render first and they fade in sequentially rather than in parallel.
    setTimeout(() => {
      this.setDate();
    }, 2000);
  }


  setDate() {
    this.setState({
      "initialized": true,
      "formattedDate": Strftime(this.state.date_format)
    });

    setTimeout(() => {
      this.setDate();
    }, 30 * 1000);
  }


  render() {
    let dateClasses = ['date'];
    let dateString = this.state.formattedDate;

    if (this.state.initialized === true) {
      dateClasses.push('loaded');
    }

    if (this.state.date_enabled === false) {
      dateClasses.push('invisible');
    }

    return (
      <div className={ dateClasses.join(' ') } dangerouslySetInnerHTML={{ "__html": dateString }} />
    );
  }
}
