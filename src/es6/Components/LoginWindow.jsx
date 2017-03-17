// LoginWindow -> Required by Main
// --------------------------------------
// Style / Composition wrapper.

import cxs from 'cxs/lite';
import Inferno from 'inferno';
import Component from 'inferno-component';


// We don't really need or desire to hold state, here, but it is
// necessary for this to be a component in order to force updates
// from the settings dialogue.

export default class LoginWindow extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
    this.storeState = this.store.getState();

    this.unsubscribe = this.store.subscribe(() => {
      this.storeState = this.store.getState();
      this.setState({
        "_toggleUpdate": !this.state._toggleUpdate
      });
    });

    this.state = {
      "_toggleUpdate": false
    };
  }

  render() {
    let settings = this.storeState.settings;
    let style = cxs({
      "border-radius": settings.window_border_radius,
      "font-size": settings.window_font_size
    });

    return (
      <div className={ `login-window ${ style }` }>
        { this.props.children }
      </div>
    );
  }
}
