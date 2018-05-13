// FormCheckbox -> Required by Settings/Settings*
// --------------------------------------
// Provides a basic binary form checkbox.

import PropTypes from 'prop-types';
import React from 'react';


export const Checkbox = ({ name, value, boundFunction }) => {
  let elementID = `option-${ name.replace(" ", "-")}`;

  return (
    <li className="settings-item">
      <input
        id={ elementID }
        type="checkbox"
        checked={ value }
        onChange={ boundFunction }
      />
      <label htmlFor={ elementID }>
        { name }
        <div className="fake-checkbox" onChange={ boundFunction }></div>
      </label>
    </li>
  );
};


Checkbox.propTypes = {
  'name': PropTypes.string.isRequired,
  'value': PropTypes.bool.isRequired,
  'boundFunction': PropTypes.func.isRequired
};


export default Checkbox;
