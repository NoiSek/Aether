// CommandPanel -> Required by Main
// --------------------------------------
// The system management half of the greeter logic.
// Displays system info and handles Sleep, Shutdown, etc.

import Inferno from 'inferno';
import Component from 'inferno-component';

import * as SystemOperations from '../Logic/SystemOperations';
import WallpaperSwitcher from './CommandPanel/WallpaperSwitcher';
import Clock from './CommandPanel/Clock';


export default class CommandPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleCommand(command, disabled, event) {
    event.preventDefault();

    if (disabled !== false) {
      window.notifications.generate(`${command} is disabled on this system.`, "error");
      return false;
    }

    SystemOperations.handleCommand(command);
  }


  generateCommands() {
    let commands = {
      "Shutdown": window.lightdm.can_shutdown,
      "Reboot": window.lightdm.can_restart,
      "Hibernate": window.lightdm.can_hibernate,
      "Sleep": window.lightdm.can_suspend
    };

    // Filter out commands we can't execute.
    let enabledCommands = (
      Object.keys(commands)
      .map((key) => commands[key] ? key : false)
      .filter((command) => command !== false)
    );

    // Are both hibernation and suspend disabled?
    // Add the row back and disable it so that the user is aware of what's happening.
    if (window.lightdm.can_suspend === false && window.lightdm.can_hibernate === false) {
      enabledCommands.push("Sleep.disabled");
    }

    // Save ourselves some work, when all four commands are enabled
    // rendering should be halted, and the logo should be moved up.
    let expanded = (enabledCommands.length > 3);
    if (expanded === true) {
      this.setState({
        "expandedCommands": true
      });
    }

    let rows = enabledCommands.map((command) => {
      let disabled = command.toLowerCase().split('.')[1] || false;
      command = command.toLowerCase().split('.')[0];

      let classes = ['command', command, disabled].filter((e) => e);

      return (
        <div className={ classes.join(' ') } onClick={ this.handleCommand.bind(this, command, disabled) }>
          <div className="icon-wrapper">
            <div className="icon"></div>
          </div>
          <div className="text">{ command }</div>
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
    let commands = this.generateCommands();

    return (
      <div>
        <WallpaperSwitcher store={ this.props.store } />
        { commands }
        <div className="bottom">
          <div className="left hostname">{ hostname }</div>
          <Clock store={ this.props.store } />
        </div>
      </div>
    );
  }
}
