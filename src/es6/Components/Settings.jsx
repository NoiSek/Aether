// Settings -> Required by Main
// --------------------------------------
// Handles greeter configuration.

import React from 'react';
import Draggable from 'draggable';
import PropTypes from 'prop-types';

import { SettingsGeneral } from './Settings/SettingsGeneral';
import { SettingsStyle } from './Settings/SettingsStyle';
import { SettingsThemes } from './Settings/SettingsThemes';
import { SettingsFunction } from './Settings/SettingsFunction';
import { SettingsPresets } from './Settings/SettingsPresets';
import { SaveDialogue } from './Settings/SaveDialogue';


const SETTINGS_HEIGHT = 300;
const SETTINGS_WIDTH = 600;


export default class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;

    this.unsubscribe = this.store.subscribe(() => {
      let storeState = this.store.getState();

      this.setState({
        "active": storeState.settings.active,
        "storeState": storeState
      });
    });

    let storeState = this.store.getState();

    this.state = {
      "active": storeState.settings.active,
      "selectedCategory": 'general',
      "storeState": storeState
    };
  }


  componentDidMount() {
    let draggable = new Draggable(document.getElementById("settings"), {
      "handle": this.handle
    });

    let centerX = ((window.innerWidth - SETTINGS_WIDTH) / 2);
    let centerY = ((window.innerHeight - SETTINGS_HEIGHT) / 2);

    draggable.set(centerX, centerY);

    // Set default zoom
    let defaultZoom = this.state.storeState.settings.dpi_zoom;
    document.getElementById("root").style.zoom = defaultZoom;
  }


  handleCategoryClick(category, e) {
    this.setState({
      "selectedCategory": category.toLowerCase()
    });
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
    let value;

    try {
      value = event.target.value;
    } catch (err) {
      value = event;
    }

    this.store.dispatch({
      "type": 'SETTINGS_SET_VALUE',
      "name": name,
      "value": value
    });
  }


  generateCategories() {
    let categories = [
      'General',
      'Style',
      'Themes',/*
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
      return (<SettingsStyle { ...componentProps } />);
    } else if (category === "themes") {
      return (<SettingsThemes { ...componentProps } />);
    } else if (category === "function") {
      return (<SettingsFunction { ...componentProps } />);
    } else if (category === "presets") {
      return (<SettingsPresets { ...componentProps } />);
    }
  }


  render() {
    let categories = this.generateCategories();
    let section = this.generateSection(this.state.selectedCategory);

    return (
      <div>
        <div className="settings-handle" ref={ (node) => this.handle = node }>
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


Settings.propTypes = {
  'store': PropTypes.object.isRequired
};
