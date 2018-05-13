// FormTextField -> Required by Settings/Settings*
// --------------------------------------
// Provides a basic binary form checkbox.

import PropTypes from 'prop-types';
import React from 'react';

export const TextField = ({ name, value, boundFunction }) => {
  let elementID = `option-${ name.replace(" ", "-")}`;

  return (
    <li className="settings-item">
      <label htmlFor={ elementID }>{ name }</label>
      <input
        id={ elementID }
        type="text"
        onInput={ boundFunction }
        defaultValue={ value }
      />
    </li>
  );
};


TextField.propTypes = {
  'name': PropTypes.string.isRequired,
  'value': PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  'boundFunction': PropTypes.func.isRequired
};


export default TextField;
