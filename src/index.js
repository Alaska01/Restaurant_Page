import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
// import contact from './modules/contact';

import loadContact from './modules/contact';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);
  loadContact();
  return element;
}

// document.body.appendChild(component());

document.body.appendChild(loadContact());
