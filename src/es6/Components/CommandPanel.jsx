// CommandPanel -> Required by Main
// --------------------------------------
// The system management half of the greeter logic.
// Displays system info and handles Sleep, Shutdown, etc.

import cxs from 'cxs';
import React from 'react';
import PropTypes from 'prop-types';

import * as SystemOperations from '../Logic/SystemOperations';
import WallpaperSwitcher from './CommandPanel/WallpaperSwitcher';
import CommandList from './CommandPanel/CommandList';
import Clock from './CommandPanel/Clock';


export default class CommandPanel extends React.Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;

    this.unsubscribe = this.store.subscribe(() => {
      this.setState({
        'storeState': this.store.getState()
      });
    });

    this.state = {
      'storeState': this.store.getState()
    };
  }


  handleCommand(command, disabled, event) {
    event.preventDefault();

    if (disabled !== false) {
      window.notifications.generate(`${ command } is disabled on this system.`, "error");
      return false;
    }

    SystemOperations.handleCommand(command);
  }


  getEnabledCommands() {
    let commands = {
      "Shutdown": (window.lightdm.can_shutdown && this.state.storeState.settings.command_shutdown_enabled),
      "Reboot": (window.lightdm.can_restart && this.state.storeState.settings.command_reboot_enabled),
      "Hibernate": (window.lightdm.can_hibernate && this.state.storeState.settings.command_hibernate_enabled),
      "Sleep": (window.lightdm.can_suspend && this.state.storeState.settings.command_sleep_enabled)
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
    let settings = this.state.storeState.settings;

    let hostname = window.lightdm.hostname;
    let hostnameClasses = ['left', 'hostname'];
    let hostNameDisabled = (settings.hostname_enabled === false);

    let commands = this.getEnabledCommands();

    if (hostNameDisabled) {
      hostnameClasses.push('invisible');
    }

    let styles = cxs({
      'background': settings.style_command_background_color
    });

    return (
      <div className={ `command-panel ${ styles }` }>
        <WallpaperSwitcher store={ this.props.store } />
        <CommandList
          enabledCommands={ commands }
          handleCommand={ this.handleCommand.bind(this) }
          store={ this.store }
        />
        <div className="bottom">
          <div className={ hostnameClasses.join(' ') }>{ hostname }</div>
          <Clock store={ this.props.store } />
        </div>
      </div>
    );
  }
}


CommandPanel.propTypes = {
  'store': PropTypes.object.isRequired
};
