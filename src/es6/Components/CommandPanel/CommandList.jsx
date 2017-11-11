// CommandList -> Required by CommandPanel
// --------------------------------------
// Displays system commands.

import PropTypes from 'prop-types';
import React from 'react';

import { CommandItem } from './CommandItem';


export const CommandList = ({ enabledCommands, handleCommand, store }) => {
  let items = enabledCommands.map((command) =>
    <CommandItem
      key={ command }
      command={ command }
      handleCommand={ handleCommand }
      store={ store }
    />
  );

  return (
    <div className="commands-wrapper">
      { items }
    </div>
  );
};


CommandList.propTypes = {
  'enabledCommands': PropTypes.arrayOf(PropTypes.string).isRequired,
  'handleCommand': PropTypes.func.isRequired,
  'store': PropTypes.object.isRequired
};


export default CommandList;
