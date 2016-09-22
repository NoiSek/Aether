import Inferno from 'inferno.min';
import Component from 'inferno-component.min';

export default class LoginSessionRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(key) {
    this.props.setActiveSession(this.props.session.key);
  }

  render() {
    let classes = ["dropdown-item"];
    let eventHandler = this.handleClick.bind(this);
    
    if (this.props.session.key === this.props.activeSession.key) {
      eventHandler = this.props.handleDropdownClick;
      classes.push("active");
    }

    return (
      <div className={ classes.join(' ') } key={ this.props.session.key } onClick={ eventHandler }>
        { this.props.session.name }
      </div>
    );
  }
}