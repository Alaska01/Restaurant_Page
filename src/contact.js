import restaurant from './images/restaurant.png';

function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = 'Phone: 080 6933 6760';

  const address = document.createElement('p');
  address.textContent = 'The Place Restaurant, Victoria Island';

  const restaurantLocation = new Image();
  restaurantLocation.src = restaurant;

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact;
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact;
