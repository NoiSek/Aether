// FormDropdown -> Required by Settings/Settings*
// --------------------------------------
// Provides a basic form dropdown.

import PropTypes from 'prop-types';
import React from 'react';


export const DropdownOption = (option) => {
  let name = option.name || option;
  let value = option.value || option;

  return (
    <option key={ `key-${name}-${value}` } value={ value }>{ name }</option>
  );
};


export const Dropdown = ({ name, value, options, boundFunction }) => {
  let elementID = `option-${ name.replace(" ", "-") }`;
  let items = options.map((option) => DropdownOption(option));

  return (
    <li className="settings-item">
      <If condition={ name !== undefined }>
        <label htmlFor={ elementID }>{ name }</label>
      </If>
      <select id={ elementID } onChange={ boundFunction } value={ value }>
        { items }
      </select>
    </li>
  );
};


Dropdown.propTypes = {
  'name': PropTypes.string,
  'value': PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  'options': PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number])
  ).isRequired,
  'boundFunction': PropTypes.func.isRequired
};


export default Dropdown;
