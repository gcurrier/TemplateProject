import * as _ from 'lodash';
import Print from './print';
import './styles/style.css';

function component() {
	var div = document.createElement('div');
	var br = document.createElement('br');
	// Using lodash, now imported by this script
	div.innerHTML = _.join(['Hello','from', 'webpack...','(Click me and check the console)'], ' ');
	div.appendChild(br);
	div.classList.add('hello');
	//calls the print module for use on demand
	div.onclick = Print.bind(null, '"Hello from webpack" message clicked!');
	
  return div;
}
document.body.appendChild(component());