// Settings -> Required by Main
// --------------------------------------
// Handles greeter configuration.

import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'draggable';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import SectionGeneral from './sections/General';
import SectionStyle from './sections/Style';
import SectionThemes from './sections/Themes';
import SaveDialogue from './SaveDialogue';

import { setPageZoom } from 'Utils/Utils';


const SETTINGS_HEIGHT = 300;
const SETTINGS_WIDTH = 600;


class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "active": this.props.settings.active,
      "selectedCategory": 'general',
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
    let defaultZoom = this.props.settings.page_zoom;
    setPageZoom(defaultZoom);
  }


  handleCategoryClick(category, e) {
    this.setState({
      "selectedCategory": category.toLowerCase()
    });
  }


  handleSettingsBinary(name) {
    this.props.dispatch({
      "type": 'SETTINGS_TOGGLE_VALUE',
      "name": name
    });
  }


  handleSettingsClose() {
    this.props.dispatch({
      "type": 'SETTINGS_TOGGLE_ACTIVE'
    });
  }


  handleSettingsMinimize() {
    this.props.dispatch({
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

    this.props.dispatch({
      "type": 'SETTINGS_SET_VALUE',
      "name": name,
      "value": value
    });
  }


  generateCategories() {
    let categories = [
      'General',
      'Style',
      'Themes'
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
      "settingsToggleBinary": this.handleSettingsBinary.bind(this),
      "settingsSetValue": this.handleSettingsText.bind(this)
    };

    if (category === "general") {
      return (<SectionGeneral { ...componentProps } />);
    } else if (category === "style") {
      return (<SectionStyle { ...componentProps } />);
    } else if (category === "themes") {
      return (<SectionThemes { ...componentProps } />);
    }
  }


  render() {
    let categories = this.generateCategories();
    let section = this.generateSection(this.state.selectedCategory);

    return ReactDOM.createPortal(
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
          <SaveDialogue />
        </div>
      </div>,
      document.getElementById("settings")
    );
  }
}


Settings.propTypes = {
  'dispatch': PropTypes.func.isRequired,
  'settings': PropTypes.object.isRequired
};


export default connect(
  (state) => {
    return {
      'settings': state.settings
    };
  },
  null
)(Settings);
