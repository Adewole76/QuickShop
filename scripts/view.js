import { products } from "./module.js";

    export const mappingProductsArray = (arrofProducts, container) =>{
       const mappedProductsArray = arrofProducts.map(product =>{
     return `<div class="product" data-user-id ="${product.id}">
     <section class="image-category">
        <img src="${product.image}">
     </section>

     <section class="name-price-btn">
        <h5 class="name-of-product">${product.name}</h5>
        <p class="product-price">$${product.price}</p>
        <button class="cartadd-btn">Add to cart</button>
     </section>
     </div>`
    }).join('');
    container.innerHTML = mappedProductsArray
    } 

    export const mappingCartArray = (arrofCartProducts, containerForCart) => {
        const mappedCartArray = arrofCartProducts.map(cartProduct =>{
            return `<div class="cart-product" data-user-id="${cartProduct.productId}">
            <section class="image-name-category">
                <img class="product-image" src="${cartProduct.productImage}">
                <footer>
                    <h4>${cartProduct.productName}</h4>
                    <p>${cartProduct.productCategory}</p>
                    <section class="product-quantity">
                         <button class="sub-quantity">-</button>
                         <button class="quantity">${cartProduct.productQuantity}</button>
                         <button class="add-Quantity">+</button>
                    </section>
                </footer>
            </section>

            <section>
                <button class="delete-btn"><img class="delete-img" src="/assets/bin.png"></button>
              <footer>
              <p class="totalQuantity-price">${cartProduct.totalPrice}</p>
              <p>${cartProduct.productPrice} each</p>
              </footer>
            </section>
            </div>`
        }).join('');
        containerForCart.innerHTML = mappedCartArray;
    }
    export const mappingForSummary = (arr, container) => {
       const mappedCartForSummary = arr.map(product =>{
        return `
        <footer class="product-totalPrice">
         <p>${product.productName} x${product.productQuantity}</p>
         <p>${product.totalPrice}<p>
        </footer>
        `
       }).join('')
       container.innerHTML = mappedCartForSummary
    }
