// FileOperations -> Required by Components/WallpaperSwitcher
// --------------------------------------
// LightDM related file / config fetching.

export function getWallpaperDirectory() {
  // Return the test folder when debugging.
  if (window.__debug === true) {
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
  if (window.__debug === true) {
    return ['boko.jpg', 'mountains-2.png', 'space-1.jpg'];
  }

  let wallpapers;

  wallpapers = window.greeterutil.dirlist(directory);
  wallpapers = wallpapers.map((e) => e.split("/").pop());

  return wallpapers;
}


export function getLogos() {
  // If we're in test mode, just return the default three.
  if (window.__debug === true) {
    return [
      ["src/test/logos/archlinux.png", "archlinux.png"],
      ["src/test/logos/antergos.png", "antergos.png"],
      ["src/test/logos/ubuntu.png", "ubuntu.png"]
    ];
  }

  // Return a tuple of the path and filename for usage in the Settings dialogue.
  let userLogo = window.config.get_str("branding", "logo");
  let themeLogos = window.greeterutil.dirlist("/usr/share/lightdm-webkit/themes/lightdm-webkit-theme-aether/src/img/logos/");

  themeLogos.push(userLogo);

  return themeLogos.map((e) => [e, e.split("/").pop()]);
}


export function getEnvironments() {
  return window.lightdm.sessions.map((session) => {
    return {
      'name': session.name,
      'value': session.key
    };
  });
}
