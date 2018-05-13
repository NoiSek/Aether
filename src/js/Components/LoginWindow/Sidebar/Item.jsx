// CommandItem -> Required by Components/CommandPanel/CommandList
// --------------------------------------
// CommandList item.

import PropTypes from 'prop-types';
import React from 'react';
import cxs from 'cxs';

import { connect } from 'react-redux';


export const SVGMap = {
  'hibernate': require('img/hibernate.svg'),
  'reboot': require('img/reboot.svg'),
  'shutdown': require('img/shutdown.svg'),
  'sleep': require('img/sleep.svg')
};


export const Item = ({ command, handleCommand, settings }) => {
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
    "color": settings.style_command_text_color,
    "text-align": settings.command_text_align
  });

  return (
    <div className={ classes.join(' ') } onClick={ handleCommand.bind(this, command, disabled) }>
      <div className={ iconWrapperClasses.join(' ') } dangerouslySetInnerHTML={{ "__html": SVGMap[command] }} />
      <div className={ `text ${ textStyle }` }>{ command }</div>
    </div>
  );
};


Item.propTypes = {
  'command': PropTypes.string.isRequired,
  'handleCommand': PropTypes.func.isRequired,
  'settings': PropTypes.object.isRequired
};


export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(Item);
