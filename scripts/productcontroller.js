import { products } from './module.js';
import { mappingProductsArray } from './view.js';
import{ cartCountIncrease } from './module.js'
import { cartCount } from './module.js';
import { addToCart } from './module.js';
import { cartArray } from './module.js';
import { cartTotal } from './module.js';
import { calculateTotal } from './module.js';

const productsContainer = document.querySelector('.products-container');
const cartNumber = document.querySelector('.cart-number')
mappingProductsArray(products, productsContainer);

productsContainer.addEventListener('click', (event) => {
    if(event.target.closest('button')){
        cartCountIncrease();
        cartNumber.innerHTML = cartCount;
    }
    

    let specificButton = event.target.closest('button');
    specificButton.textContent = '✓ Added';
    specificButton.style.color = '#16a34a';
    specificButton.style.backgroundColor = 'white';
    specificButton.style.borderColor = '#16a34a'
    

    setTimeout(() => {
      specificButton.style.color = 'white';
      specificButton.style.backgroundColor = '#2563eb';
      specificButton.textContent = 'Add to cart'
}, 2000);

const particularProductdiv = event.target.closest('.product');
const productTobeAddedToCart =  products.find(product => product.id === Number(particularProductdiv.dataset.userId));
console.log(productTobeAddedToCart)
addToCart(productTobeAddedToCart.name, productTobeAddedToCart.image, productTobeAddedToCart.price, productTobeAddedToCart.category, productTobeAddedToCart.id);
calculateTotal(productTobeAddedToCart.price);
});
cartNumber.innerHTML = cartCount;



