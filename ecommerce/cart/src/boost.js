import faker from 'faker';

const cart = (ele) => {
  let cart = `<div>You have ${faker.random.number()} items in your cart</div>`;
  ele.innerHTML = cart;
}

// Context/Situation #1
// we are running this file in development or isolation
// we are using our local index.html file
// which defenitely has an element with an id of 'products-list' exits or not
// we want to immediately render our app into that element.
if (process.env.NODE_ENV === 'development') {
  // console.log(process.env.NODE_ENV);
  const ele = document.querySelector('#cart-price');
  // Assuming our container does not have an element
  // with id 'products-list'
  if (ele) {
    // we are probably running in isolation
    cart(ele);
  } 
}

// Context/Situation #2
// we are running this file in development or production
// through the CONTAINER applicationCache
// no guaranteee that an element with an id of 'products-list' exists or not
// we do not want try to immediately render the app
export { cart };