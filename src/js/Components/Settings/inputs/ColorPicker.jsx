// FormColorPicker -> Required by Settings/Settings*
// --------------------------------------
// Wraps the jsColorPicker lib to provide a color picker.

import React from 'react';
import tinycolor from 'tinycolor2';
import PropTypes from 'prop-types';

import { ChromePicker } from 'react-color';


export class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'active': false,
      'color': tinycolor(props.value).toHsl()
    };
  }


  handleChange(color, event) {
    let colorString = tinycolor(color[color.source]).toHslString();

    this.setState({
      'color': color[color.source]
    });

    this.props.boundFunction(colorString);
  }


  handleClose(e) {
    this.setState({ 'active': false });
  }


  handleOpen(e) {
    this.setState({ 'active': true });
  }


  render () {
    let elementID = `option-${ this.props.name.replace(" ", "-")}`;
    let swatchContainerClasses = ['swatch-container'];
    let colorPicker = false;

    if (this.state.active === true) {
      swatchContainerClasses.push("active");

      colorPicker = (
        <ChromePicker color={ this.state.color } onChange={ this.handleChange.bind(this) } />
      );
    }

    return (
      <li className="settings-item settings-color">
        <label htmlFor={ elementID } title={ this.props.name }>{ this.props.name }</label>
        <div id={ elementID } className={ swatchContainerClasses.join(" ") }>
          <div className="swatch" onClick={ this.handleOpen.bind(this) }>
            <div className="swatch-fg" style={{ 'backgroundColor': this.props.value }} />
            <div className="swatch-bg swatch-bg-black" />
            <div className="swatch-bg swatch-bg-gray" />
            <div className="swatch-bg swatch-bg-white" />
          </div>
          { colorPicker }
          <div className="colorpicker-background" onClick={ this.handleClose.bind(this) }/>
        </div>
      </li>
    );
  }
}


ColorPicker.propTypes = {
  'value': PropTypes.string.isRequired,
  'name': PropTypes.string.isRequired,
  'boundFunction': PropTypes.func.isRequired
};


export default ColorPicker;
