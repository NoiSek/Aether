import PropTypes from 'prop-types';
import React from 'react';

import { connect } from 'react-redux';

import * as Settings from 'Logic/Settings';
import DefaultThemes from '../DefaultThemes';


class Theme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  getColors() {
    let colors = [];

    for (let setting of Object.keys(this.props.theme)) {
      if (setting.startsWith('style') && setting.indexOf('color') !== -1) {
        colors.push([setting, this.props.theme[setting]]);
      }
    }

    return colors;
  }


  render() {
    let colorItems = this.getColors().map(([name, color]) =>
      <li
        key={ name }
        className="theme-color-block"
        style={ { 'backgroundColor': color } }
        alt={ color }
        title={ color }
      >
        &nbsp;
      </li>
    );

    let isDefaultTheme = !(Object.keys(DefaultThemes).indexOf(this.props.name) !== -1);

    return (
      <div className="theme">
        <div className="upper">
          <h5 className="theme-name">{ this.props.name}</h5>
          <button onClick={ this.props.loadTheme.bind(this, this.props.name, this.props.theme) }>preview</button>
          <If condition={ isDefaultTheme }>
            <button className="delete" onClick={ this.props.deleteTheme.bind(this, this.props.name) }>delete</button>
          </If>
        </div>
        <ul>
          { colorItems }
        </ul>
      </div>
    );
  }
}


Theme.propTypes = {
  'name': PropTypes.string.isRequired,
  'theme': PropTypes.object.isRequired,
  'loadTheme': PropTypes.func.isRequired,
  'deleteTheme': PropTypes.func.isRequired
};


export class SettingsThemes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'themes': { ...Settings.getUserThemes(), ...DefaultThemes }
    };

    this.nodes = {};
  }

  handleDeleteTheme(themeName) {
    Settings.deleteTheme(themeName);

    this.setState({
      'themes': { ...Settings.getUserThemes(), ...DefaultThemes }
    });

    window.notifications.generate(`Theme has been deleted!`, "success");
  }


  handleLoadTheme(themeName, theme) {
    this.props.dispatch({
      'type': 'SETTINGS_APPLY_THEME',
      'name': themeName,
      'theme': theme
    });
  }


  handleSaveTheme(e) {
    e.preventDefault();
    e.stopPropagation();

    let themeName = this.nodes.themeName.value;

    Settings.saveTheme(themeName, this.props.settings);

    this.setState({
      'themes': { ...Settings.getUserThemes(), ...DefaultThemes }
    });

    window.notifications.generate(`Your theme has been saved.`, "success");
  }


  render() {
    let themes = this.state.themes;
    let themeItems = Object.keys(themes).map(themeName =>
      <Theme
        key={ themeName }
        name={ themeName }
        theme={ themes[themeName] }
        loadTheme={ this.handleLoadTheme.bind(this) }
        deleteTheme={ this.handleDeleteTheme.bind(this) }
      />
    );

    return (
      <div className="settings-themes">
        <div className="theme-saver">
          <p>Save current settings as a theme?</p>
          <input type="text" name="theme-name" defaultValue="" placeholder="Theme Name" ref={ node => this.nodes.themeName = node } />
          <button className="save-theme" onClick={ this.handleSaveTheme.bind(this) }>
            save theme
          </button>
        </div>
        <div className="theme-list">
          { themeItems }
        </div>
      </div>
    );
  }
}


SettingsThemes.propTypes = {
  'settings': PropTypes.object.isRequired,
  'dispatch': PropTypes.func.isRequired
};


export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(SettingsThemes);
