// CommandItem -> Required by Components/CommandPanel/CommandList
// --------------------------------------
// CommandList item.

import Inferno from 'inferno';


export const CommandItem = ({ command, handleCommand }) => {
  let disabled = command.toLowerCase().split('.')[1] || false;
  command = command.toLowerCase().split('.')[0];

  let classes = ['command', command, disabled].filter((e) => e);

  return (
    <div className={ classes.join(' ') } onClick={ handleCommand.bind(this, command, disabled) }>
      <div className="icon-wrapper">
        <div className="icon"></div>
      </div>
      <div className="text">{ command }</div>
    </div>
  );
};


export default CommandItem;
