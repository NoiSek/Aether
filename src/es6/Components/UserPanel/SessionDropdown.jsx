// SessionDropdown -> Required by Components/UserPanel/Form
// --------------------------------------
// Displays session rows as a dropdown to handle
// session switching.

import Inferno from 'inferno';
import Component from 'inferno-component';

import SessionRow from './SessionRow';


export default class SessionDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    // Sort by active, then alphabetical.
    // Doing this requires using sort in reverse.
    let rows = (
      window.lightdm.sessions
      .sort((a, b) => {
        return a.name.toUpperCase() > b.name.toUpperCase();
      })
      .sort((a, b) => {
        return (b.key.toLowerCase() === this.props.activeSession.key.toLowerCase()) ? 1 : -1;
      })
      .map((session) => (
        <SessionRow
          activeSession={ this.props.activeSession }
          session={ session }
          handleDropdownClick={ this.props.handleDropdownClick }
          handleDropdownLeave={ this.props.handleDropdownLeave }
          setActiveSession={ this.props.setActiveSession }
        />
      ))
    );

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
