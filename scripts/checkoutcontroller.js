import { cartArray } from "./module.js"
import { mappingForSummary } from "./view.js"
import { cartTotal } from "./module.js"
const cartNumber = document.querySelector('.cart-number');
const summaryContainer = document.querySelector('.summary-container')
const subTotal = document.querySelector('.subtotal')
const checkoutTotal = document.querySelector('.checkout-total')
const orderBtn = document.querySelector('.order-btn')
const mainOrderContainer = document.querySelector('.main-order-container');
const orderFormInputs = document.querySelectorAll('.order-form-input');
const orderNumber = document.querySelector('.order-number')
const confirmationContainer = document.querySelector('.Confirmation-Container');
console.log(orderNumber);
console.log(orderFormInputs);
console.log(summaryContainer)
mappingForSummary(cartArray, summaryContainer)
subTotal.innerHTML = cartTotal
cartNumber.innerHTML = cartArray.length;
checkoutTotal.innerHTML = cartTotal;
let arrayofUnfilled = []


orderBtn.addEventListener('click', function() {
    // 1. Reset borders and track if everything is valid
    let allInputsValid = true;
    let arrayOfUnfilled = []; // Declared to fix the console.log error

    for (let i = 0; i < orderFormInputs.length; i++) {
        const input = orderFormInputs[i];

        if (!input.value.trim()) { 
            // If empty, turn border red
            input.style.borderColor = 'red';
            allInputsValid = false;
            arrayOfUnfilled.push(input); // Track which ones are empty
        } else {
            // Reset border if the user filled it in
            input.style.borderColor = ''; 
        }
    }

    // 2. Control the UI based on the final result
    if (allInputsValid) {
        mainOrderContainer.style.display = 'none';
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center'
        document.body.style.alignItems = 'center'
        document.body.style.height = '100vh';
        confirmationContainer.classList.remove('hidden');
        localStorage.clear()
    }

    console.log(arrayOfUnfilled);
    generateCustomCode()
    let customCode = generateCustomCode()
    console.log(customCode);
    orderNumber.innerHTML = customCode;

});

function generateCustomCode() {
    const prefix = "SH";
    
    // Generates a random integer between 10000 and 99999
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    
    return `${prefix}-${randomNumber}`;
}
