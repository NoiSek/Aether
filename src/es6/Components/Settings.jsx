// Settings -> Required by Main
// --------------------------------------
// Handles greeter configuration.

import Inferno from 'inferno';
import Draggable from 'draggable';
import Component from 'inferno-component';

import { SettingsGeneral } from './Settings/SettingsGeneral';
import { SettingsStyle } from './Settings/SettingsStyle';
import { SettingsThemes } from './Settings/SettingsThemes';
import { SettingsFunction } from './Settings/SettingsFunction';
import { SettingsPresets } from './Settings/SettingsPresets';
import { SaveDialogue } from './Settings/SaveDialogue';


const SETTINGS_HEIGHT = 300;
const SETTINGS_WIDTH = 600;


export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
    this.storeState = this.store.getState();

    this.unsubscribe = this.store.subscribe(() => {
      this.storeState = this.store.getState();
      this.setState({
        "active": this.storeState.settings.active
      });
    });

    this.state = {
      "active": this.storeState.settings.active,
      "selectedCategory": 'general'
    };
  }


  componentDidMount() {
    let draggable = new Draggable(document.getElementById("settings"), {
      "handle": this.refs.handle
    });

    let centerX = ((window.innerWidth - SETTINGS_WIDTH) / 2);
    let centerY = ((window.innerHeight - SETTINGS_HEIGHT) / 2);

    draggable.set(centerX, centerY);

    // Set default zoom
    let defaultZoom = this.storeState.settings.dpi_zoom;
    document.getElementById("root").style.zoom = defaultZoom;
  }


  handleCategoryClick(category, e) {
    this.setState({
      "selectedCategory": category.toLowerCase()
    });
  }


  handleColorBlur(e) {
    let mappedSetting = e.target.dataset.mappedsetting;
    this.handleSettingsText(mappedSetting, e);
  }


  handleSettingsBinary(name) {
    this.store.dispatch({
      "type": 'SETTINGS_TOGGLE_VALUE',
      "name": name
    });
  }


  handleSettingsClose() {
    this.store.dispatch({
      "type": 'SETTINGS_TOGGLE_ACTIVE'
    });
  }


  handleSettingsMinimize() {
    this.store.dispatch({
      "type": 'SETTINGS_WINDOW_MINIMIZE'
    });
  }


  handleSettingsText(name, event) {
    let value = event.target.value;

    this.store.dispatch({
      "type": 'SETTINGS_SET_VALUE',
      "name": name,
      "value": value
    });
  }


  generateCategories() {
    let categories = [
      'General',
      'Style'/*,
      'Themes',
      'Function',
      'Presets'*/
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
    let componentProps = {
      "store": this.props.store,
      "settingsToggleBinary": this.handleSettingsBinary.bind(this),
      "settingsSetValue": this.handleSettingsText.bind(this)
    };

    if (category === "general") {
      return (<SettingsGeneral { ...componentProps } />);
    } else if (category === "style") {
      return (<SettingsStyle { ...componentProps } onComponentDidMount={ this.initColorPicker.bind(this) } />);
      // return (<SettingsStyle
      //   store={this.props.store}
      //   settingsToggleBinary={this.handleSettingsBinary.bind(this)}
      //   settingsSetValue={this.handleSettingsText.bind(this)}
      //   onComponentDidMount={this.initColorPicker.bind(this)}
      //   />
      //);
    } else if (category === "themes") {
      return (<SettingsThemes { ...componentProps } />);
    } else if (category === "function") {
      return (<SettingsFunction { ...componentProps } />);
    } else if (category === "presets") {
      return (<SettingsPresets { ...componentProps } />);
    }
  }

  initColorPicker() {
    this.colorPicker = jsColorPicker('input.color', {});
    this.colorPickerInputs = document.querySelectorAll('input.color');

    for (let input of this.colorPickerInputs) {
      input.addEventListener('blur', this.handleColorBlur.bind(this));
    }
  }

  destroyColorPicker() {
    this.colorPicker.destroyAll();

    for (let input of this.colorPickerInputs) {
      input.removeEventListener('blur', this.handleColorBlur.bind(this));
    }
  }


  render() {
    let categories = this.generateCategories();
    let section = this.generateSection(this.state.selectedCategory);

    return (
      <div>
        <div className="settings-handle" ref={ (node) => this.refs.handle = node }>
          <ul>
            <li className="settings-minimize" onClick={ this.handleSettingsMinimize.bind(this) }>&#8722;</li>
            <li className="settings-close" onClick={ this.handleSettingsClose.bind(this) }>&#215;</li>
          </ul>
        </div>
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
