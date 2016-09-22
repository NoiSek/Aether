import Inferno from 'inferno.min';
import Component from 'inferno-component.min';

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