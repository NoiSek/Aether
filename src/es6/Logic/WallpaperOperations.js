// WallpaperOperations -> Required by Components/WallpaperSwitcher
// --------------------------------------
// LightDM related Wallpaper config / fetching.

export function getWallpaperDirectory() {
  // Return the test folder when debugging.
  if (window.debug === true) {
    return "src/test/wallpapers/";
  }

  let wallpapersDirectory = window.config.get_str("branding", "background_images");

  // Do NOT allow the default wallpaper directory to set, as this will prevent the default provided backgrounds from
  // being used 100% of the time in a stock install.
  if (wallpapersDirectory == "/usr/share/backgrounds" || wallpapersDirectory == "/usr/share/backgrounds/") {
    wallpapersDirectory = "/usr/share/lightdm-webkit/themes/lightdm-webkit-theme-aether/src/img/wallpapers/";
  }

  return wallpapersDirectory;
}

export function getWallpapers(directory) {
  // If we're in test mode, we stick to a static rotation of three default wallpapers.
  // In production, it is possible that a user will change what wallpapers are available.
  if (window.debug === true) {
    return ['boko.jpg', 'mountains-2.png', 'space-1.jpg'];
  }

  let wallpapers;

  wallpapers = window.greeterutil.dirlist(directory);
  wallpapers = wallpapers.map((e, i, a) => e.split("/").pop());

  return wallpapers;
}
