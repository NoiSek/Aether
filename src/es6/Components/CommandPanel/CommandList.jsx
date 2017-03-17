// CommandList -> Required by CommandPanel
// --------------------------------------
// Displays system commands.

import Inferno from 'inferno';

import { CommandItem } from './CommandItem';


export const CommandList = ({ enabledCommands, handleCommand, iconsEnabled, textAlign }) => {
  let items = enabledCommands.map((command) =>
    <CommandItem
      command={ command }
      handleCommand={ handleCommand }
      iconsEnabled={ iconsEnabled }
      textAlign={ textAlign }
    />
  );

  return (
    <div className='commands-wrapper'>
      { items }
    </div>
  );
};


export default CommandList;
