import Inferno from 'inferno.min';
import Component from 'inferno-component.min';

const FADEOUT_TIME = 600;

export const WALLPAPERS = getWallpapers();

function getWallpapers() {
  // If we're in test mode, we stick to a static rotation of three default wallpapers.
  // In production, it is possible that a user will change what wallpapers are available.
  let _wallpapers = undefined;

  if (window.debug === true) {
    _wallpapers = ['boko.jpg', 'mountains-2.png', 'space-1.jpg'];
  } else {
    let wallpapersDirectory = window.config.get_str("branding", "background_images");

    // Do NOT allow the default wallpaper directory to set, as this will prevent the default provided backgrounds from 
    // being used 100% of the time in a stock install.
    if (wallpapersDirectory == "/usr/share/backgrounds" || wallpapersDirectory == "/usr/share/backgrounds/") {
      wallpapersDirectory = "/usr/share/lightdm-webkit/themes/lightdm-webkit-theme-aether/src/img/backgrounds/";
    }

    _wallpapers = window.greeterutil.dirlist(wallpapersDirectory);
    _wallpapers = _wallpapers.map((e, i, a) => e.split("/").pop());
  }

  return _wallpapers;
}

export default class WallpaperSwitcher extends Component {
  constructor(props) {
    super(props);

    let wallpaperDirectory;
    
    // Set background directory
    if (window.debug === true) {
      wallpaperDirectory = "src/test/wallpapers/";
    } else {
      wallpaperDirectory = "src/img/wallpapers/";
    }

    this.state = {
      "wallpaperDirectory": wallpaperDirectory,
      "currentWallpaper": undefined,
      "establishedWallpaper": undefined,
      "wallpaperBackground": undefined,
      "wallpaperForeground": undefined,
      "switcher": {
        "active": false,
        "currentlyFading": false,
        "index": 0
      }
    };
  }

  componentWillMount() {
    // Set background wallpaper
    if (typeof(Storage) !== "undefined") {
      // Set a default wallpaper if none found.
      if (localStorage.getItem("wallpaper") === null) {
        localStorage.setItem("wallpaper", "space-1.jpg");
      }

      let wallpaperDirectory = this.state.wallpaperDirectory;
      let wallpaperImage = localStorage.getItem("wallpaper");
      let wallpaperBackground = document.querySelectorAll('.wallpaper-background')[0];
      let wallpaperForeground = document.querySelectorAll('.wallpaper-foreground')[0];

      wallpaperForeground.style.background = `url('${wallpaperDirectory}${wallpaperImage}')`;
      wallpaperForeground.style.backgroundSize = "cover";

      this.setState({
        "establishedWallpaper": wallpaperImage,
        "wallpaperBackground": wallpaperBackground,
        "wallpaperForeground": wallpaperForeground
      });
    } else {
      window.notifications.generate("localStorage not supported.", 'error');
    }
  }

  acceptWallpaper() {
    let currentWallpaper = this.state.currentWallpaper;
    let switcher = this.state.switcher;
    
    // Due diligence.
    localStorage.setItem("wallpaper", currentWallpaper);
    window.notifications.generate("This wallpaper has been saved as your default background.", 'success');
    
    // Reset switcher state
    switcher.active = false;
    switcher.index = 0;

    this.setState({
      "currentWallpaper": currentWallpaper,
      "establishedWallpaper": currentWallpaper,
      "switcher": switcher
    });
  }

  cycleWallpaper() {
    // Prevent animation transitions stacking and causing issues.
    if (this.state.switcher.currentlyFading === true) {
      return false;
    }

    let wallpapers = WALLPAPERS;
    let switcher = this.state.switcher;
    let index = (switcher.index + wallpapers.length + 1) % wallpapers.length;
    let newWallpaper = wallpapers[index];

    this.setWallpaper(newWallpaper);

    switcher.index = index;

    this.setState({
      "switcher": switcher
    });
  }

  handleSwitcherActivation() {
    let switcher = this.state.switcher;
    switcher.active = true;
    this.cycleWallpaper();

    this.setState({
      "switcher": switcher
    });
  }

  rejectWallpaper() {
    let establishedWallpaper = this.state.establishedWallpaper;
    let switcher = this.state.switcher;

    // Reset switcher state
    switcher.active = false;
    switcher.index = 0;

    this.setState({
      "switcher": switcher
    });

    this.setWallpaper(establishedWallpaper);

    window.notifications.generate("Wallpaper reset to default, no changes saved.");
  }

  setWallpaper(newWallpaper) {
    let switcher = this.state.switcher;

    // Fadeout foreground wallpaper to new wallpaper
    let wallpaperDirectory = this.state.wallpaperDirectory;
    this.state.wallpaperBackground.style.background = `url('${wallpaperDirectory}${newWallpaper}')`;
    this.state.wallpaperBackground.style.backgroundSize = 'cover';
    this.state.wallpaperForeground.className += " fadeout";

    switcher.currentlyFading = true;

    setTimeout(() => {
      // Cycle new wallpaper back to the front, make it visible again.
      this.state.wallpaperForeground.style.background = `url('${wallpaperDirectory}${newWallpaper}')`;
      this.state.wallpaperForeground.style.backgroundSize = 'cover';
      this.state.wallpaperForeground.className = this.state.wallpaperForeground.className.replace(" fadeout", "");

      let switcher = this.state.switcher;
      switcher.currentlyFading = false;

      this.setState({
        "currentWallpaper": newWallpaper,
        "switcher": switcher
      });
    }, FADEOUT_TIME);
  }

  generateOptions() {
    let classes = ['options'];

    if (this.state.switcher.active === true) {
      classes.push("active");
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

    return (
      <div className="distro-wrapper">
        <div className="distro-logo" onClick={ this.handleSwitcherActivation.bind(this) }></div>
        { options }
      </div>
    );
  }
}