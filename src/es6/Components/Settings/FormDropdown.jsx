// FormDropdown -> Required by Settings/Settings*
// --------------------------------------
// Provides a basic form dropdown.

import Inferno from 'inferno';


export const DropdownOption = (defaultValue, option) => {
  let name = option.name || option;
  let value = option.value || option;

  let selected = (value == defaultValue) ? 'selected' : false;

  return (
    <option value={ value } selected={ selected }>{ name }</option>
  );
};


export const FormDropdown = ({ name, value, options, boundFunction }) => {
  let elementID = `option-${ name.replace(" ", "-") }`;
  let items = options.map((option) => DropdownOption(value, option));

  let label = (name) ? (<label for={ elementID }>{ name }</label>) : false;

  return (
    <li className="settings-item">
      { label }
      <select id={ elementID } onChange={ boundFunction }>{ items }</select>
    </li>
  );
};


export default FormDropdown;
