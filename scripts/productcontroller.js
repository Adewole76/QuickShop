import { products } from './module.js';
import { mappingProductsArray } from './view.js';
import{ cartCountIncrease } from './module.js'
import { cartCount } from './module.js';
import { addToCart } from './module.js';
import { cartArray } from './module.js';
import { cartTotal } from './module.js';
import { calculateTotal } from './module.js';
import { mappingCartArray } from './view.js';
const productsContainer = document.querySelector('.products-container');
const cartNumber = document.querySelector('.cart-number')
mappingProductsArray(products, productsContainer);

productsContainer.addEventListener('click', (event) => {
    if(event.target.closest('button')){
        cartCountIncrease();
        cartNumber.innerHTML = cartArray.length;
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
if(cartArray.some(product => product.productId === productTobeAddedToCart.id)){
    console.log(`there's something similar in the cart`)
   let productToBeIncreased = cartArray.find(product => product.productId === productTobeAddedToCart.id)
   console.log(productToBeIncreased);
   productToBeIncreased.productQuantity = productToBeIncreased.productQuantity + 1;
   calculateTotal(productToBeIncreased.productPrice);
   productToBeIncreased.totalPrice = productToBeIncreased.totalPrice + productToBeIncreased.productPrice   
   localStorage.setItem('cartStuff', JSON.stringify(cartArray))
}else{
addToCart(productTobeAddedToCart.name, productTobeAddedToCart.image, productTobeAddedToCart.price, productTobeAddedToCart.category, productTobeAddedToCart.id);
calculateTotal(productTobeAddedToCart.price);
cartNumber.innerHTML = cartArray.length
}
});
cartNumber.innerHTML = cartArray.length;



