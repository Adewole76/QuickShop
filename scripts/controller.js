import { products } from './module.js';
import { mappingProductsArray } from './view.js';
import{ cartCountIncrease } from './module.js'
import { cartCount } from './module.js';
const productsContainer = document.querySelector('.products-container');
const cartNumber = document.querySelector('.cart-number')
console.log(cartNumber);
console.log(cartCountIncrease)
mappingProductsArray(products, productsContainer);

productsContainer.addEventListener('click', (event) => {
    if(event.target.closest('button')){
        cartCountIncrease();
    }
    cartNumber.innerHTML = cartCount;
})
cartNumber.innerHTML = cartCount;



