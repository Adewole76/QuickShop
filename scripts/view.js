
    export const mappingProductsArray = (arrofProducts, container) =>{
       const mappedProductsArray = arrofProducts.map(product =>{
     return `<div class="product">
     <h5 class="name-of-product">${product.name}</h5>
     <button class="cartadd-btn">Add to cart</button>
     </div>`
    }).join('');
    container.innerHTML = mappedProductsArray
    } 
    
