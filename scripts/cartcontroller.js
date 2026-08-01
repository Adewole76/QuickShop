import { cartCount } from './module.js';
import { cartArray } from './module.js';
import { mappingCartArray } from './view.js';
import { updateCartArray } from './module.js';
import { cartCountDecrease } from './module.js';
import { mappingForSummary } from './view.js';
import { calculateTotal } from './module.js';
import { cartTotal } from './module.js';
import { removeFromTotal } from './module.js';
const cartContainer = document.querySelector('.cart-container');
const cartNumber = document.querySelector('.cart-number')
const summaryContainer = document.querySelector('.summary-container');
const totalAmount = document.querySelector('.total-amount');
console.log(totalAmount);
totalAmount.innerHTML = cartTotal;
cartNumber.innerHTML = cartArray.length;
console.log(cartArray);
mappingCartArray(cartArray, cartContainer);

cartContainer.addEventListener('click', (event)=>{
if(event.target.closest('.delete-btn')|| event.target.closest('.delete-img')){
    const particularcartProduct = event.target.closest('.cart-product');
    const particularcartProductid = particularcartProduct.dataset.userId;
    console.log(particularcartProductid);
    let filteredCartArray = cartArray.filter(cartProduct => cartProduct.productId !== Number(particularcartProductid))
    const particularcartProductObject = cartArray.find(cartProduct => cartProduct.productId === Number(particularcartProductid))
    console.log(particularcartProductObject)
    updateCartArray(filteredCartArray);
    removeFromTotal(particularcartProductObject.totalPrice)
    localStorage.setItem('cartStuff', JSON.stringify(cartArray))
    mappingCartArray(cartArray, cartContainer)
    mappingForSummary(cartArray, summaryContainer);
    cartCountDecrease();
    totalAmount.innerHTML = cartTotal;
    cartNumber.innerHTML = cartArray.length
}else if(event.target.closest('.sub-quantity')){
 const particularsubButton = event.target.closest('.sub-quantity');
 const particularcartProduct = event.target.closest('.cart-product');
 const particularcartProductid = particularcartProduct.dataset.userId;
 const particularcartProductObject = cartArray.find(cartProduct => cartProduct.productId === Number(particularcartProductid))
 if(particularcartProductObject.productQuantity === 1){
    particularcartProductObject.productQuantity = 1;
 }else if(particularcartProductObject.productQuantity > 1){
    particularcartProductObject.productQuantity = particularcartProductObject.productQuantity - 1;
    particularcartProductObject.totalPrice = particularcartProductObject.totalPrice - particularcartProductObject.productPrice;
    removeFromTotal(particularcartProductObject.productPrice)
    mappingCartArray(cartArray, cartContainer)
    mappingForSummary(cartArray, summaryContainer)
    totalAmount.innerHTML = cartTotal;
    localStorage.setItem('cartStuff', JSON.stringify(cartArray));
}
}
else if(event.target.closest('.add-Quantity')){
 const particularsubButton = event.target.closest('.add-quanitity');
 const particularcartProduct = event.target.closest('.cart-product');
 const particularcartProductid = particularcartProduct.dataset.userId;
 const particularcartProductObject = cartArray.find(cartProduct => cartProduct.productId === Number(particularcartProductid))
 particularcartProductObject.productQuantity = particularcartProductObject.productQuantity + 1;
 particularcartProductObject.totalPrice = particularcartProductObject.totalPrice + particularcartProductObject.productPrice;
 calculateTotal(particularcartProductObject.productPrice);
 mappingCartArray(cartArray, cartContainer);
 mappingForSummary(cartArray, summaryContainer)
 console.log(particularcartProductObject.productQuantity);
 totalAmount.innerHTML = cartTotal;
 localStorage.setItem('cartStuff', JSON.stringify(cartArray));
}
})

mappingForSummary(cartArray, summaryContainer)