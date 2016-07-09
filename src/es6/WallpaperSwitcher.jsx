import Inferno from 'src/dist/js/inferno.min';
import Component from 'src/dist/js/inferno-component.min';

const FADEOUT_TIME = 600;

export class WallpaperSwitcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "currentWallpaper": undefined,
      "establishedWallpaper": undefined,
      "wallpaperBackground": undefined,
      "wallpaperForeground": undefined,
      "switcher": {
        "active": false,
        "currentlyFading": false,
        "index": 0
      }
    }
  }

  componentWillMount() {
    // Set background wallpaper
    if (typeof(Storage) !== "undefined") {
      // Set a default wallpaper if none found.
      if (localStorage.getItem("wallpaper") === null) {
        localStorage.setItem("wallpaper", "abstract.jpg");
      }

      let wallpaperImage = localStorage.getItem("wallpaper");
      let wallpaperBackground = document.querySelectorAll('.wallpaper-background')[0];
      let wallpaperForeground = document.querySelectorAll('.wallpaper-foreground')[0];

      wallpaperForeground.style.background = `url('src/img/backgrounds/${wallpaperImage}')`;
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

    let backgrounds = this.props.backgrounds;
    let switcher = this.state.switcher;
    let index = (switcher.index + backgrounds.length + 1) % backgrounds.length;
    let newWallpaper = backgrounds[index];

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
    this.state.wallpaperBackground.style.background = `url('src/img/backgrounds/${newWallpaper}')`;
    this.state.wallpaperBackground.style.backgroundSize = 'cover';
    this.state.wallpaperForeground.className += " fadeout";

    switcher.currentlyFading = true;

    setTimeout(() => {
      // Cycle new wallpaper back to the front, make it visible again.
      this.state.wallpaperForeground.style.background = `url('src/img/backgrounds/${newWallpaper}')`;
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