import { cartCount } from './module.js';
import { cartArray } from './module.js';
import { mappingCartArray } from './view.js';
const cartContainer = document.querySelector('.cart-container');
const cartNumber = document.querySelector('.cart-number')
cartNumber.innerHTML = cartCount;
console.log(cartArray)
mappingCartArray(cartArray, cartContainer);

cartContainer.addEventListener('click', (event)=>{

})