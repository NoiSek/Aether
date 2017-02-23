// Clock -> Required by Components/CommandPanel
// --------------------------------------
// Just a clock.

import Inferno from 'inferno';
import Component from 'inferno-component';

import { padZeroes } from '../../Utils/Utils';

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "currentTime": undefined,
      "initialized": false
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
    let now = new Date();
    let hours = padZeroes(now.getHours());
    let minutes = padZeroes(now.getMinutes());
    let formattedTime = `${hours}:${minutes}`;

    this.setState({
      "currentTime": formattedTime
    });

    setTimeout(() => {
      this.updateClock();
    }, 1000);
  }


  render() {
    let classes = ['right', 'clock'];
    let currentTime = this.state.currentTime;

    if (this.state.initialized === true) {
      classes.push('loaded');
    }

    return (
      <div className={ classes.join(' ') }>
        { currentTime }
      </div>
    );
  }
}
