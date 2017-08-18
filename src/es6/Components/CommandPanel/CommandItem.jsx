// CommandItem -> Required by Components/CommandPanel/CommandList
// --------------------------------------
// CommandList item.

import Inferno from 'inferno';
import cxs from 'cxs';

export const SVGMap = {
  'hibernate': require('img/hibernate.svg'),
  'reboot': require('img/reboot.svg'),
  'shutdown': require('img/shutdown.svg'),
  'sleep': require('img/sleep.svg')
};


export const CommandItem = ({ command, handleCommand, store }) => {
  let settings = store.getState().settings;

  let disabled = command.toLowerCase().split('.')[1] || false;
  command = command.toLowerCase().split('.')[0];

  let classes = ['command', command, disabled].filter((e) => e);
  let iconWrapperClasses = ['icon-wrapper'];

  if (settings.command_icons_enabled === false) {
    iconWrapperClasses.push('hidden');
  }

  let iconStyle = cxs({
    "color": settings.style_command_icon_color
  });

  iconWrapperClasses.push(iconStyle);

  let textStyle = cxs({
    "text-align": settings.command_text_align
  });

  return (
    <div className={ classes.join(' ') } onClick={ handleCommand.bind(this, command, disabled) }>
      <div className={ iconWrapperClasses.join(' ') } dangerouslySetInnerHTML={{ "__html": SVGMap[command] }}>
      </div>
      <div className={ `text ${ textStyle }` }>{ command }</div>
    </div>
  );
};


export default CommandItem;
