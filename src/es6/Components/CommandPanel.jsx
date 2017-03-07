// CommandPanel -> Required by Main
// --------------------------------------
// The system management half of the greeter logic.
// Displays system info and handles Sleep, Shutdown, etc.

import Inferno from 'inferno';
import Component from 'inferno-component';

import * as SystemOperations from '../Logic/SystemOperations';
import WallpaperSwitcher from './CommandPanel/WallpaperSwitcher';
import CommandList from './CommandPanel/CommandList';
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


  getEnabledCommands() {
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

    return enabledCommands;
  }


  render() {
    let hostname = window.lightdm.hostname;
    let hostnameClasses = ['left', 'hostname'];

    let commands = this.getEnabledCommands();

    if (this.storeState.settings.hostname_enabled === false) {
      hostnameClasses.push('invisible');
    }

    return (
      <div>
        <WallpaperSwitcher store={ this.props.store } />
        <CommandList enabledCommands={ commands } handleCommand={ this.handleCommand.bind(this) } />
        <div className="bottom">
          <div className={ hostnameClasses.join(' ') }>{ hostname }</div>
          <Clock store={ this.props.store } />
        </div>
      </div>
    );
  }
}
