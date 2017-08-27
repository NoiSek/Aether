// CommandList -> Required by CommandPanel
// --------------------------------------
// Displays system commands.

import Inferno from 'inferno';

import { CommandItem } from './CommandItem';


export const CommandList = ({ enabledCommands, handleCommand, iconsEnabled, store }) => {
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


export default CommandList;
