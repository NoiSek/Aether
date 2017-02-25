// Settings -> Required by Main
// --------------------------------------
// Handles greeter configuration.

import Inferno from 'inferno';
import Component from 'inferno-component';

import { SettingsGeneral } from './Settings/SettingsGeneral';
import { SettingsStyle } from './Settings/SettingsStyle';
import { SettingsThemes } from './Settings/SettingsThemes';
import { SettingsFunction } from './Settings/SettingsFunction';
import { SettingsPresets } from './Settings/SettingsPresets';
import { SaveDialogue } from './Settings/SaveDialogue';

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
      "selectedCategory": 'general'
    };
  }


  handleCategoryClick(category, e) {
    this.setState({
      "selectedCategory": category.toLowerCase()
    });
  }


  generateCategories() {
    let categories = [
      'General',
      'Style',
      'Themes',
      'Function',
      'Presets'
    ];

    let listItems = categories.map((category) => {
      let classes = [];

      if (category.toLowerCase() === this.state.selectedCategory) {
        classes.push('active');
      }

      return (
        <li key={ category } className={ classes.join(' ') } onClick={ this.handleCategoryClick.bind(this, category) }>
          { category }
        </li>
      );
    });

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
      <div>
        <div className="settings-categories">
          { categories }
        </div>
        <div className="settings-section">
          { section }
          <SaveDialogue store={ this.props.store } />
        </div>
      </div>
    );
  }
}
