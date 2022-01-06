// WallpaperSwitcher -> Required by Components/CommandPanel
// --------------------------------------
// Serves to handle wallpaper switching through DOM manipulation.

import cxs from 'cxs';
import React from 'react';
import PropTypes from 'prop-types';
import regeneratorRuntime from "regenerator-runtime";

import { connect } from 'react-redux';


import * as FileOperations from 'Logic/FileOperations';
import * as Settings from 'Logic/Settings';

const FADEOUT_TIME = 600;


class WallpaperSwitcher extends React.Component {
  constructor(props) {
    super(props);

    let wallpaperDirectory = FileOperations.getWallpaperDirectory();

    this.defaultStarsEnabled = undefined;

    this.cyclerBackground = undefined;
    this.cyclerForeground = undefined;
    this.cyclerPreloader = undefined;

    this.state = {
      "directory": wallpaperDirectory,
      "wallpapers": [],
      "selectedWallpaper": undefined,
      "savedWallpaper": undefined,
      "switcher": {
        "active": false,
        "currentlyFading": false,
        "index": 0
      },
    };

    this.init();
  }

  async init() {
    let wallpapers = await FileOperations.getWallpapers(this.state.directory);
    this.state.wallpapers = wallpapers;
  }


  componentDidMount() {
    // Set background wallpaper
    let directory = this.state.directory;
    let image = Settings.requestSetting('wallpaper', 'space-1.jpg');
    this.cyclerBackground = document.querySelectorAll('.wallpaper-background')[0];
    this.cyclerForeground = document.querySelectorAll('.wallpaper-foreground')[0];
    this.cyclerPreloader = document.querySelectorAll('.wallpaper-preload')[0];

    this.cyclerForeground.style.background = `url('${ directory }${ image }')`;
    this.cyclerForeground.style.backgroundPosition = 'center';
    this.cyclerForeground.style.backgroundSize = "cover";
    document.body.style.background = `url('${ directory }${ image }')`;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = "cover";

    this.setState({
      "savedWallpaper": image
    });
  }


  acceptWallpaper() {
    let selectedWallpaper = this.state.selectedWallpaper;
    let switcher = this.state.switcher;

    // Due diligence.
    Settings.saveSetting('wallpaper', selectedWallpaper);
    window.notifications.generate("This wallpaper has been saved as your default background.", 'success');

    // Reset switcher state
    switcher.active = false;
    switcher.index = 0;

    this.setState({
      "selectedWallpaper": selectedWallpaper,
      "savedWallpaper": selectedWallpaper,
      "switcher": switcher
    });

    this.restoreStarsSetting();
  }


  cycleWallpaper() {
    // Prevent animation transitions stacking and causing issues.
    if (this.state.switcher.currentlyFading === true) {
      return false;
    }

    let wallpapers = this.state.wallpapers;
    let switcher = this.state.switcher;

    const nextIndex = (index) => (index + wallpapers.length + 1) % wallpapers.length;

    let newIndex = nextIndex(switcher.index);
    let newWallpaper = wallpapers[newIndex];

    let preloadedIndex = nextIndex(newIndex);
    let preloadedWallpaper = wallpapers[preloadedIndex];

    console.log({newIndex, newWallpaper});
    this.setWallpaper(newWallpaper, preloadedWallpaper);

    switcher.index = newIndex;

    this.setState({
      "switcher": switcher
    });
  }


  handleSwitcherActivation() {
    if (this.state.switcher.active === false) {
      this.defaultStarsEnabled = this.props.starsEnabled;

      this.props.dispatch({
        'type': 'SETTINGS_SET_VALUE',
        'name': 'experimental_stars_enabled',
        'value': false
      });
    }

    setTimeout(() => {
      let switcher = this.state.switcher;
      switcher.active = true;
      this.cycleWallpaper();

      this.setState({
        "switcher": switcher
      });
    }, 100);
  }


  rejectWallpaper() {
    let savedWallpaper = this.state.savedWallpaper;
    let switcher = this.state.switcher;

    // Reset switcher state
    switcher.active = false;
    switcher.index = 0;

    this.setState({
      "switcher": switcher
    });

    this.setWallpaper(savedWallpaper);
    this.restoreStarsSetting();

    window.notifications.generate("Wallpaper reset to default, no changes saved.");
  }


  setWallpaper(newWallpaper, preloadedWallpaper=false) {
    let switcher = this.state.switcher;

    // Fadeout foreground wallpaper to new wallpaper
    let directory = this.state.directory;
    this.cyclerBackground.style.background = `url('${ directory }${ newWallpaper }')`;
    this.cyclerBackground.style.backgroundPosition = 'center';
    this.cyclerBackground.style.backgroundSize = 'cover';
    this.cyclerForeground.className += " fadeout";

    switcher.currentlyFading = true;

    if (preloadedWallpaper !== false) {
      // Preload the next image
      this.cyclerPreloader.style.background = `url('${ directory }${ preloadedWallpaper }')`;
    }

    setTimeout(() => {
      // Cycle new wallpaper back to the front, make it visible again.
      this.cyclerForeground.style.background = `url('${ directory }${ newWallpaper }')`;
      this.cyclerForeground.style.backgroundPosition = 'center';
      this.cyclerForeground.style.backgroundSize = 'cover';
      this.cyclerForeground.className = this.cyclerForeground.className.replace(" fadeout", "");
      document.body.style.background = `url('${ directory }${ newWallpaper }')`;
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundSize = 'cover';

      let switcher = this.state.switcher;
      switcher.currentlyFading = false;

      this.setState({
        "selectedWallpaper": newWallpaper,
        "switcher": switcher
      });
    }, FADEOUT_TIME);
  }


  restoreStarsSetting() {
    this.props.dispatch({
      'type': 'SETTINGS_SET_VALUE',
      'name': 'experimental_stars_enabled',
      'value': this.defaultStarsEnabled
    });
  }


  generateOptions() {
    let classes = ['options'];

    if (this.state.switcher.active === true) {
      classes.push('active');
    }

    return (
      <div className='options-wrapper'>
        <div className={ classes.join(' ') }>
          <div className="button-reject" onClick={ this.rejectWallpaper.bind(this) } >✕</div>
          <div className="button-accept" onClick={ this.acceptWallpaper.bind(this) } >✓</div>
        </div>
      </div>
    );
  }


  render() {
    let options = this.generateOptions();
    let classes = [ 'distro-logo' ];

    classes.push(cxs({
      "background-image": `url("${ this.props.distroImage }") !important`,
    }));

    if (this.props.desaturate) {
      classes.push(cxs({
        "filter": `grayscale(1) brightness(${ (parseInt(this.props.brightness) * 200) / 100 }%)`
      }));
    }

    return (
      <div className="distro-wrapper">
        <div className={ classes.join(' ') } onClick={ this.handleSwitcherActivation.bind(this) }></div>
        { options }
      </div>
    );
  }
}


WallpaperSwitcher.propTypes = {
  'distroImage': PropTypes.string.isRequired,
  'starsEnabled': PropTypes.bool.isRequired,
  'desaturate': PropTypes.bool.isRequired,
  'brightness': PropTypes.string.isRequired,

  'dispatch': PropTypes.func.isRequired
};


export default connect(
  (state) => {
    return {
      'distroImage': state.settings.distro,
      'starsEnabled': state.settings.experimental_stars_enabled,
      'desaturate': state.settings.style_command_logo_desaturate,
      'brightness': state.settings.style_command_logo_brightness
    };
  },
  null
)(WallpaperSwitcher);
