import { products } from 'products/ProductIndex';
import { cart } from 'cart/CartShow';

console.log('container project');

products(document.querySelector('#container-products'));
cart(document.querySelector('#container-cart'));