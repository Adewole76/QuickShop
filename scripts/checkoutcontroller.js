import { cartArray } from "./module.js"
import { mappingForSummary } from "./view.js"
import { cartTotal } from "./module.js"
const cartNumber = document.querySelector('.cart-number');
const summaryContainer = document.querySelector('.summary-container')
const subTotal = document.querySelector('.subtotal')
const checkoutTotal = document.querySelector('.checkout-total')
console.log(summaryContainer)
mappingForSummary(cartArray, summaryContainer)
subTotal.innerHTML = cartTotal
cartNumber.innerHTML = cartArray.length;
checkoutTotal.innerHTML = cartTotal