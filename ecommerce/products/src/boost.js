import faker from 'faker';

const products = (ele) => {
  let products = "";

  for(let i=0; i<5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
  }
  
  ele.innerHTML = products;
}

// Context/Situation #1
// we are running this file in development or isolation
// we are using our local index.html file
// which defenitely has an element with an id of 'products-list' exits or not
// we want to immediately render our app into that element.
if (process.env.NODE_ENV === 'development') {
  // console.log(process.env.NODE_ENV);
  const ele = document.querySelector('#products-list');
  // Assuming our container does not have an element
  // with id 'products-list'
  if (ele) {
    // we are probably running in isolation
    products(ele);
  } 
}

// Context/Situation #2
// we are running this file in development or production
// through the CONTAINER applicationCache
// no guaranteee that an element with an id of 'products-list' exists or not
// we do not want try to immediately render the app
export { products };