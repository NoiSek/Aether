export default class Notifications {
  constructor() {
    this.container = document.querySelectorAll('.notifications-container')[0];
  }

  generate(message, type) {
    if (type === undefined) {
      type = "";
    }

    let notification = document.createElement('div');
    notification.className = `notification ${type}`;
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