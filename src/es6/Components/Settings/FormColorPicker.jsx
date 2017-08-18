// FormColorPicker -> Required by Settings/Settings*
// --------------------------------------
// Wraps the jsColorPicker lib to provide a color picker.

import Inferno from 'inferno';


export const FormColorPicker = ({ name, value, mappedSetting }) => {
  let elementID = `option-${ name.replace(" ", "-")}`;

  return (
    <li className="settings-item settings-color">
      <label for={ elementID }>{ name }</label>
      <div className="swatch-container">
        <div className="swatch">
          <div className="swatch-fg" style={ `background-color: ${value}` } />
          <div className="swatch-bg swatch-bg-black" />
          <div className="swatch-bg swatch-bg-gray" />
          <div className="swatch-bg swatch-bg-white" />
        </div>
        <input
          id={ elementID }
          className="color"
          type="text"
          data-mappedsetting={ mappedSetting }
          defaultValue={ value }
        />
      </div>
    </li>
  );
};


export default FormColorPicker;
