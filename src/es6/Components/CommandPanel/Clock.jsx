// Clock -> Required by Components/CommandPanel
// --------------------------------------
// Just a clock.

import Inferno from 'inferno';
import Strftime from "strftime";
import Component from 'inferno-component';


export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
    this.storeState = this.store.getState();

    this.unsubscribe = this.store.subscribe(() => {
      this.storeState = this.store.getState();

      this.setState({
        "time_enabled": this.storeState.settings.time_enabled,
        "time_format": this.storeState.settings.time_format
      });
    });

    this.state = {
      "initialized": false,
      "time_enabled": this.storeState.settings.time_enabled,
      "time_format": this.storeState.settings.time_format,
      "formattedTime": ""
    };
  }


  componentDidMount() {
    setTimeout(() => {
      this.updateClock();
      this.setState({
        "initialized": true
      });
    }, 1000);
  }


  updateClock() {
    this.setState({
      "formattedTime": Strftime(this.state.time_format)
    });

    setTimeout(() => {
      this.updateClock();
    }, 1000);
  }


  render() {
    let classes = ['right', 'clock'];
    let currentTime = this.state.formattedTime;

    if (this.state.initialized === true && this.state.time_enabled === true) {
      classes.push('loaded');
    } else if (this.state.time_enabled === false) {
      classes.push('invisible');
    }

    return (
      <div className={ classes.join(' ') }>
        { currentTime }
      </div>
    );
  }
}
