import Inferno from 'src/dist/js/inferno.min';
import Component from 'src/dist/js/inferno-component.min';

export class CommandPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "currentTime": undefined,
      "expandedCommands": false,
      "timeInitialized": false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.updateClock();
      let timer = setInterval(this.updateClock.bind(this), 1000);
    }, 1000);
  }

  handleCommand(event) {
    let command = event.target.getAttribute('data-command').toLowerCase();
    let disabled = event.target.className.indexOf('disabled') !== -1;

    if (disabled) {
      window.notifications.generate(`${command} is disabled on this system.`, "error")
    }

    return false;

    if (command === "shutdown") {
      window.lightdm.shutdown();
    } else if (command === "hibernate") {
      window.lightdm.hibernate();
    } else if (command === "reboot") {
      window.lightdm.restart();
    } else if (command === "sleep") {
      window.lightdm.suspend();
    }
  }

  updateClock() {
    let padZeroes = (i) => (i < 10) ? "0" + i : i;

    let now = new Date();
    let hours = padZeroes(now.getHours());
    let minutes = padZeroes(now.getMinutes());
    let formattedTime = `${hours}:${minutes}`;

    this.setState({
      "currentTime": formattedTime
    });

    // Cycle through a render pass once in order for the fadeIn animation to play properly.
    if (this.state.timeInitialized === false) {
      setTimeout(() => {
        this.setState({
          "timeInitialized": true
        });
      }, 100);
    }
  }

  generateCommands() {
    let commands = {
      "Shutdown": window.lightdm.can_shutdown,
      "Hibernate": window.lightdm.can_hibernate, 
      "Reboot": window.lightdm.can_restart, 
      "Sleep": window.lightdm.can_suspend
    };

    let enabledCommands = Object.keys(commands)
    .map((key) => commands[key] ? key : false)
    .filter((command) => command !== false);

    if (window.lightdm.can_suspend === false && window.lightdm.can_hibernate === false) {
      // Add the row back and disable it so that the user is aware of what's happening.
      enabledCommands.push("Sleep.disabled")
    }

    // Save ourselves some work, when all four commands are enabled
    // rendering should be halted, and the logo should be moved up.
    let expanded = (enabledCommands.length > 3);
    if (expanded === true) {
      this.setState({
        'expandedCommands': true
      });
    }

    let rows = enabledCommands.map((command) => {
      let disabled = command.toLowerCase().split('.')[1] || false;
      command = command.toLowerCase().split('.')[0];
      
      let classes = ['command', command, disabled].filter((e) => e);

      return (
        <div className={ classes.join(' ') } data-command={ command } onClick={ this.handleCommand }>
          <div class="icon-wrapper">
            <div class="icon"></div>
          </div>
          <div class="text">{ command }</div>
        </div>
      );
    });

    let classes = ['commands-wrapper'];

    return (
      <div className={ classes.join(' ') }>
        { rows }
      </div>
    );
  }

  render() {
    let hostname = window.lightdm.hostname;
    let currentTime = this.state.currentTime;
    let commands = this.generateCommands();

    let currentTimeClasses = ['right', 'clock'];

    if (this.state.timeInitialized) {
      currentTimeClasses.push('loaded');
    }

    return (
      <div>
        <div className="distro-wrapper">
          <div className="distro-logo"></div>
        </div>
        { commands }
        <div className="bottom">
          <div className="left hostname">{ hostname }</div>
          <div className={ currentTimeClasses.join(' ') }>{ currentTime }</div>
        </div>
      </div>
    );
  }
}