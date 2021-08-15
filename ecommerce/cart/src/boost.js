import faker from 'faker';

let cart = `<div>You have ${faker.random.number()} items in your cart</div>`;

document.querySelector('#cart-price').innerHTML = cart;