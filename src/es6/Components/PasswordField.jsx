import Inferno from 'inferno.min';
import Component from 'inferno-component.min';

export default class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let classes = ['user-password'];

    if (this.props.passwordFailed === true) {
      classes.push('error');
    }
    
    return (
      <input 
        type="password" 
        placeholder="*******************" 
        className={ classes.join(' ') } 
        value={ this.props.password }
        onChange={ this.props.handlePasswordInput }
      />
    );
  }
}