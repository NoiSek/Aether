# Aether
###### ( lightdm-webkit-aether )
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

## Troubleshooting

### My login screen hasn't changed!

Make sure you have lightdm enabled via systemctl with `systemctl is-enabled lightdm.service`. If it isn't, follow up with:
```
sudo systemctl enable lightdm.service
```

### My screen is black!

Verify that your libgl / glx drivers are properly installed. Find any potential issues with your X config by switching to another TTY with Ctrl+Alt+F2 and trying:
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
- [ ] AUR Package
- [x] Animated previews
- [x] Multi-user support
- [x] Full single-user support
- [x] User-switching animations
- [ ] Animation on successful login
- [x] Handle login errors more visibly.
- [ ] Dependency optimization, inline CSS
- [ ] Separate dates from their parent components
- [ ] Separate styling when used as a lock screen

##### Credit
- *Bear by Yu luck from the Noun Project*
- *Power by Nikita Kozin from the Noun Project*