import Inferno from 'src/dist/js/inferno.min';
import Component from 'src/dist/js/inferno-component.min';

// For some reason this caused undiagnosable hangs in LightDM-webkit (But not in-browser)
// until it was separated into its own component.

export class Clock extends Component {
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

  padZeroes(i) {
    return (i < 10) ? "0" + i : i;
  }

  updateClock() {    
    let now = new Date();
    let hours = this.padZeroes(now.getHours());
    let minutes = this.padZeroes(now.getMinutes());
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