import Inferno from 'inferno';
import Component from 'inferno-component';

import { SettingsGeneral } from './SettingsGeneral';
import { SettingsStyle } from './SettingsStyle';
import { SettingsThemes } from './SettingsThemes';
import { SettingsFunction } from './SettingsFunction';
import { SettingsPresets } from './SettingsPresets';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
    this.storeState = this.store.getState();

    this.unsubscribe = this.store.subscribe(() => {
      this.storeState = this.store.getState();
      this.setState({
        "active": this.storeState.active
      });
    });

    this.state = {
      "active": false,
      "selectedCategory": 'General'
    };
  }


  generateCategories() {
    let categories = [
      'General',
      'Style',
      'Themes',
      'Function',
      'Presets'
    ];

    let listItems = categories.map((category) =>
      <li key={ category } data-key={ category } onClick={ this.handleCategoryClick.bind(this) }>
        { category }
      </li>
    );

    return (
      <ul>
        { listItems }
      </ul>
    );
  }


  generateSection(_category) {
    let category = _category.toLowerCase();

    if (category === "general") {
      return (<SettingsGeneral store={ this.props.store } />);
    } else if (category === "style") {
      return (<SettingsStyle store={ this.props.store } />);
    } else if (category === "themes") {
      return (<SettingsThemes store={ this.props.store } />);
    } else if (category === "function") {
      return (<SettingsFunction store={ this.props.store } />);
    } else if (category === "presets") {
      return (<SettingsPresets store={ this.props.store } />);
    }
  }


  render() {
    let categories = this.generateCategories();
    let section = this.generateSection(this.state.selectedCategory);

    return (
      <div className="settings">
        <div className="settings-categories">
          { categories }
        </div>
        <div className="settings-section">
          { section }
        </div>
      </div>
    );
  }
}
