import Inferno from 'inferno.min';
import Component from 'inferno-component.min';

import LoginSessionRow from './LoginSessionRow';

export default class LoginSessionDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Sort by active, then alphabetical. 
    // Doing this requires using sort in reverse.
    let rows = window.lightdm.sessions
    .sort((a, b) => {
      return a.name.toUpperCase() > b.name.toUpperCase();
    })
    .sort((a, b) => {
      return (b.key.toLowerCase() === this.props.activeSession.key.toLowerCase()) ? 1 : -1;
    })
    .map((session) => (
      <LoginSessionRow
        activeSession={ this.props.activeSession }
        session={ session }
        handleDropdownClick={ this.props.handleDropdownClick }
        handleDropdownLeave={ this.props.handleDropdownLeave }
        setActiveSession={ this.props.setActiveSession }
      />
    ));

    let classes = ['dropdown', 'user-session'];

    if (this.props.dropdownActive === true) {
      classes.push('active');
    }

    return (
      <div className={ classes.join(' ') } onMouseLeave={ this.props.handleDropdownLeave }>
        { rows }
      </div>
    );
  }
}