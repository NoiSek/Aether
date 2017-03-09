// CommandItem -> Required by Components/CommandPanel/CommandList
// --------------------------------------
// CommandList item.

import Inferno from 'inferno';
import cxs from 'cxs/lite';


export const CommandItem = ({ command, handleCommand, iconsEnabled, textAlign }) => {
  let disabled = command.toLowerCase().split('.')[1] || false;
  command = command.toLowerCase().split('.')[0];

  let classes = ['command', command, disabled].filter((e) => e);
  let iconWrapperClasses = ['icon-wrapper'];

  if (iconsEnabled === false) {
    iconWrapperClasses.push('hidden');
  }

  let commandStyles = cxs({
    "text-align": textAlign
  });

  return (
    <div className={ classes.join(' ') } onClick={ handleCommand.bind(this, command, disabled) }>
      <div className={ iconWrapperClasses.join(' ') }>
        <div className="icon"></div>
      </div>
      <div className={ `text ${ commandStyles }` }>{ command }</div>
    </div>
  );
};


export default CommandItem;
