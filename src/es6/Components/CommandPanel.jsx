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

    this.store = this.props.store;
    this.storeState = this.store.getState();

    this.unsubscribe = this.store.subscribe(() => {
      this.storeState = this.store.getState();

      this.setState({
        "command_shutdown_enabled": this.storeState.settings.command_shutdown_enabled,
        "command_reboot_enabled": this.storeState.settings.command_reboot_enabled,
        "command_hibernate_enabled": this.storeState.settings.command_hibernate_enabled,
        "command_sleep_enabled": this.storeState.settings.command_sleep_enabled
      });
    });

    this.state = {
      "command_shutdown_enabled": this.storeState.settings.command_shutdown_enabled,
      "command_reboot_enabled": this.storeState.settings.command_reboot_enabled,
      "command_hibernate_enabled": this.storeState.settings.command_hibernate_enabled,
      "command_sleep_enabled": this.storeState.settings.command_sleep_enabled
    };
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
      "Shutdown": (window.lightdm.can_shutdown && this.state.command_shutdown_enabled),
      "Reboot": (window.lightdm.can_restart && this.state.command_reboot_enabled),
      "Hibernate": (window.lightdm.can_hibernate && this.state.command_hibernate_enabled),
      "Sleep": (window.lightdm.can_suspend && this.state.command_sleep_enabled)
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
