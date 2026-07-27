import { cartCount } from './module.js';
import { cartArray } from './module.js';
const cartContainer = document.querySelector('cart-container');
const cartNumber = document.querySelector('.cart-number')
cartNumber.innerHTML = cartCount;