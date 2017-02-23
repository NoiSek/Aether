// SessionRow -> Required by Components/SessionDropdown
// --------------------------------------
// Just a row.

import Inferno from 'inferno';


const SessionRow = (props) => {
  let classes = ['dropdown-item'];
  let eventHandler = props.setActiveSession.bind(this, props.session.key);

  if (props.session.key === props.activeSession.key) {
    eventHandler = props.handleDropdownClick;
    classes.push('active');
  }

  return (
    <div className={ classes.join(' ') } key={ props.session.key } onClick={ eventHandler }>
      { props.session.name }
    </div>
  );
};


export default SessionRow;
