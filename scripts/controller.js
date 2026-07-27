import { products } from './module.js';
import { mappingProductsArray } from './view.js';


const productsContainer = document.querySelector('.products-container');
console.log(productsContainer)
console.log(products)

mappingProductsArray(products, productsContainer);

