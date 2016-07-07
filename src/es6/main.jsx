import Inferno from 'src/dist/js/inferno.min';
import Component from 'src/dist/js/inferno-component.min';
import InfernoDOM from 'src/dist/js/inferno-dom.min';
import { LoginPanel } from './LoginPanel';

function initClock() {
  // This causes the clock to render one second later than the date does,
  // but it looks nicer for them to fade in seperately, so I'm leaving it.
  let timer = setInterval(updateClock, 1000);
}

function updateClock() {
  let padZeroes = (i) => (i < 10) ? "0" + i : i;

  let now = new Date();
  let hours = padZeroes(now.getHours());
  let minutes = padZeroes(now.getMinutes());
  let formattedTime = `${hours}:${minutes}`;

  let clock = document.querySelectorAll(".clock")[0]

  clock.innerText = formattedTime;
  
  if(clock.className.indexOf("loaded") === -1) {
    clock.className += " loaded";
  }
}

function setHostname() {
  let hostname = document.querySelectorAll(".hostname")[0];
  hostname.innerText = window.lightdm.hostname;
}

export default function main() {
  setHostname();
  initClock();
  InfernoDOM.render(<LoginPanel />, document.getElementById("inferno-mount"));
}