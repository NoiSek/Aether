// FormDropdown -> Required by Settings/Settings*
// --------------------------------------
// Provides a basic form dropdown.

import Inferno from 'inferno';


export const DropdownOption = (defaultValue, option) => {
  let selected = (option == defaultValue) ? 'selected' : false;

  return (
    <option value={ option } selected={ selected }>{ option }</option>
  );
};


export const FormDropdown = ({ name, value, options, boundFunction }) => {
  let elementID = `option-${ name.replace(" ", "-") }`;
  let items = options.map((option) => DropdownOption(value, option));


  return (
    <li className="settings-item">
      <label for={ elementID }>{ name }</label>
      <select id={ elementID } onChange={ boundFunction }>{ items }</select>
    </li>
  );
};


export default FormDropdown;
