// FormCheckbox -> Required by Settings/Settings*
// --------------------------------------
// Provides a basic binary form checkbox.

import Inferno from "inferno";


export const FormCheckbox = ({ name, value, boundFunction }) => {
  let elementID = `option-${ name.replace(" ", "-")}`;

  return (
    <li className="settings-item">
      <input
        id={ elementID }
        type="checkbox"
        checked={ value }
      />
      <label onClick={ boundFunction } for={ elementID }>
        { name }
        <div className="fake-checkbox"></div>
      </label>
    </li>
  );
};


export default FormCheckbox;
