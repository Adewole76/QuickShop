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
            return `<div class="cart-product">
            
            </div>`
        }).join('')
    }
    
