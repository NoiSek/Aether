export default class Notifications {
  constructor() {
    this.container = document.querySelectorAll('.notifications-container')[0];

    if (window.__debug === true) {
      this.generate("Hey there!", "success");

      setTimeout(() => {
        this.generate("TIP: Click the logo to switch wallpapers.");
      }, 2000);

      setTimeout(() => {
        this.generate("TIP: Access settings by hovering over the bottom left of your screen!");
      }, 5 * 1000);
    }
  }

  generate(message, type) {
    if (type === undefined) {
      type = "";
    }

    let notification = document.createElement('div');
    notification.className = `notification ${ type }`;
    notification.innerText = message;
    this.container.appendChild(notification);

    setTimeout(() => {
      notification.className += " fadeout";
      setTimeout(() => {
        this.container.removeChild(notification);
      }, 500);
    }, 5000);
  }
}
