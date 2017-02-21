import Inferno from "inferno";
import Component from "inferno-component";

export default class LoginWindow extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
    this.storeState = {};

    this.unsubscribe = this.store.subscribe((state) => {
      this.storeState = state;
    });
  }

  render() {
    return (
      <div> Hello! </div>
    );
  }
}
