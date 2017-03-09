// FormTextField -> Required by Settings/Settings*
// --------------------------------------
// Provides a basic binary form checkbox.

import Inferno from 'inferno';

export const FormTextField = ({ name, value, boundFunction }) => {
  let elementID = `option-${ name.replace(" ", "-")}`;

  return (
    <li className="settings-item">
      <label for={ elementID }>{ name }</label>
      <input
        id={ elementID }
        type="text"
        onInput={ boundFunction }
        value={ value }
      />
    </li>
  );
};


export default FormTextField;
