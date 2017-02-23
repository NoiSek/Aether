// PasswordField -> Required by Components/UserPanel/Form
// --------------------------------------
// Simple password input field.

import Inferno from 'inferno';


const PasswordField = (props) => {
  let classes = ['user-password'];

  if (props.passwordFailed === true) {
    classes.push('error');
  }

  return (
    <input
      type="password"
      placeholder="*******************"
      className={ classes.join(' ') }
      value={ props.password }
      onInput={ props.handlePasswordInput }
    />
  );
};

export default PasswordField;
