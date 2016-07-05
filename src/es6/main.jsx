import Inferno from 'src/dist/inferno.min';
import Component from 'src/dist/inferno-component.min';
import InfernoDOM from 'src/dist/inferno-dom.min';

console.log("Before");

export default function main() {
  console.log("In");
  InfernoDOM.render(<div>Hello World!</div>, document.getElementById("neat"));
  console.log("After");
}

main();
console.log("It works!");
