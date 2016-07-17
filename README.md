# Aether
###### ( lightdm-webkit-theme-aether )
Inspired by a lifelong love with space. 

A Sleek, straightforward Archlinux themed login screen written on lightdm and the lightdm-webkit2-greeter.

**Try it out [here, at the live demo](https://noisek.github.io/Aether/).**

![](../screenshots/screenshot.png)

![](../screenshots/screenshot-2.png)

## Features

**Multi User Support**

![](../screenshots/user-switcher.gif)

**Built-in Wallpaper Customization**

![](../screenshots/wallpaper-switcher.gif)

## Requirements
- [lightdm-webkit2-greeter (aur/lightdm-webkit2-greeter )](https://github.com/Antergos/lightdm-webkit2-greeter)

## Installation

**Recommended Automatic Installation**

[Available on the AUR](https://aur.archlinux.org/packages/lightdm-webkit-theme-aether/). ArchLinux users can substitute pacaur with yaourt, packer, etc. as necessary and install with the following:

```
pacaur -S lightdm-webkit-theme-aether
```

**Manual Installation**

This assumes that you already have lightdm and lightdm-webkit2-greeter installed (but not configured).

```
# If you prefer the last stable release, download from the releases page instead: https://github.com/NoiSek/Aether/releases/latest
git clone git@github.com:NoiSek/Aether.git
sudo cp --recursive Aether /usr/share/lightdm-webkit/themes/Aether

# Set default lightdm-webkit2-greeter theme to Aether
sudo sed -i 's/^webkit-theme\s*=\s*\(.*\)/webkit-theme = lightdm-webkit-aether #\1/g' etc/lightdm/lightdm-webkit2-greeter.conf

# Set default lightdm greeter to lightdm-webkit2-greeter
sudo sed -i 's/^\(#?greeter\)-session\s*=\s*\(.*\)/greeter-session = lightdm-webkit2-greeter #\1/ #\2g' etc/lightdm/lightdm.conf
```

### **Setting an Avatar Image**

![](./src/img/default-user.png)

Once LightDM, LightDM Webkit Greeter, and Aether are installed you will need to set an avatar image for your users. Size is irrelevant, and avatars will be displayed as a 125x125 circle (Yes, square images too). Users that don't have an avatar set will default to the [astronaut](./src/img/default-user.png).

To accomplish this, you can do either of the following: 
- Create an image in your home directory named `.face`.
- Append `Icon=/path/to/your/avatar.png` to the bottom of the file at `/var/lib/AccountsService/users/<youraccountname>`

## Troubleshooting

### My login screen hasn't changed!

Make sure you have lightdm enabled via systemctl with `systemctl is-enabled lightdm.service`. If it isn't, follow up with:
```
sudo systemctl enable lightdm.service
```

### My screen is black!

Verify that your libgl / glx drivers are properly installed. Find any potential issues with your X config by switching to another TTY with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F2</kbd> and trying:
```
sudo cat /var/log/Xorg.0.log | grep -i "glx"
```

Are you able to run `glxinfo` without errors?

### The lock screen isn't using my lightdm theme!

If you are using cinnamon, gnome, or any gnome derivative; Good Luck. The solution involves [light-locker (community/light-locker)](https://github.com/the-cavalry/light-locker), but conflicts with the existing lock / screensaver applications. There is no known way to resolve this.

If you are not using a gnome derivative, see below.

Solution:

```
echo "light-locker &" >> ~/.xprofile
```

##### Todo
- [x] Live demo
- [x] AUR Package
- [x] Animated previews
- [x] Multi-user support
- [x] Full single-user support
- [x] User-switching animations
- [x] ~~Animation on successful login~~ Unnecessary and sluggish feeling.
- [x] Handle login errors more visibly.
- [x] ~~Dependency optimization, inline CSS~~ Introduced too many dependencies, ironically.
- [ ] Separate dates from their parent components
- [x] ~~Separate styling when used as a lock screen~~ Out of scope.

##### Credit
- *Bear by Yu luck from the Noun Project*
- *Power by Nikita Kozin from the Noun Project*
