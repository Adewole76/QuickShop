const storedCartTotal = localStorage.getItem('total')
const parsedStoredCartTotal = JSON.parse(storedCartTotal)
export let cartTotal = parsedStoredCartTotal?parsedStoredCartTotal:0
export const calculateTotal = (product) =>{
  cartTotal = cartTotal + product;
  localStorage.setItem('total', JSON.stringify(cartTotal))
}

export const removeFromTotal = (product) =>{
  cartTotal = cartTotal - product
  localStorage.setItem('total', JSON.stringify(cartTotal))
}


// cart count increment function
const storedCartCount = localStorage.getItem('cart')
const parsedStoredCount = JSON.parse(storedCartCount);
export let cartCount = parsedStoredCount?parsedStoredCount:0;
export const cartCountIncrease = () =>{
    cartCount = cartCount + 1;
    console.log(cartCount);
   localStorage.setItem('cart', JSON.stringify(cartCount));
}
export const cartCountDecrease = () =>{
  cartCount = cartCount - 1;
  console.log(cartCount)
  localStorage.setItem('cart', JSON.stringify(cartCount));
}
let storedcartArray = localStorage.getItem('cartStuff');
let parsedStoredCartArray = JSON.parse(storedcartArray);
export let cartArray = parsedStoredCartArray? parsedStoredCartArray:[];
export function updateCartArray(newArray) {
    cartArray = newArray;
}
export const addToCart = (name, image, price, category, id) => {
   const newCartObject = {
    productId: id,
    productName: name,
    productImage: image,
    productPrice: price,
    productCategory: category,
    productQuantity: 1,
    totalPrice: price
   }
   cartArray.unshift(newCartObject);
   localStorage.setItem('cartStuff', JSON.stringify(cartArray))
};

//Products list Array
export const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 18500,
    category: "Electronics",
    image: "/outputImgs/stuff3.webp",
    description: "Noise-cancelling wireless headphones with long battery life.",
    inStock: true
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 32000,
    category: "Electronics",
    image: "/outputImgs/stuff3.webp",
    description: "Fitness tracking smartwatch with heart rate monitor.",
    inStock: true
  },
  {
    id: 3,
    name: "Casual Cotton T-Shirt",
    price: 6500,
    category: "Clothing",
    image: "/outputImgs/stuff3.webp",
    description: "Comfortable cotton t-shirt available in multiple colors.",
    inStock: true
  },
  {
    id: 4,
    name: "Leather Sneakers",
    price: 27500,
    category: "Clothing",
    image: "/outputImgs/stuff5.webp",
    description: "Stylish and durable leather sneakers for everyday wear.",
    inStock: true
  },
  {
    id: 5,
    name: "JavaScript: The Complete Guide",
    price: 8900,
    category: "Books",
    image: "/outputImgs/stuff2.webp",
    description: "Comprehensive guide to modern JavaScript development.",
    inStock: true
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 24500,
    category: "Electronics",
    image: "/outputImgs/stuff4.webp",
    description: "RGB mechanical keyboard with tactile switches.",
    inStock: true
  },
  {
    id: 7,
    name: "Portable Power Bank 20000mAh",
    price: 12500,
    category: "Electronics",
    image: "/outputImgs/stuff5.webp",
    description: "Fast-charging power bank with dual USB ports.",
    inStock: true
  },
  {
    id: 8,
    name: "Denim Jacket",
    price: 19500,
    category: "Clothing",
    image: "/outputImgs/stuff3.webp",
    description: "Classic denim jacket suitable for all seasons.",
    inStock: true
  },
  {
    id: 9,
    name: "Notebook Set (3 Pack)",
    price: 4500,
    category: "Books",
    image: "/outputImgs/stuff2.webp",
    description: "Set of 3 high-quality ruled notebooks.",
    inStock: true
  },
  {
    id: 10,
    name: "Wireless Mouse",
    price: 7800,
    category: "Electronics",
    image: "/outputImgs/stuff3.webp",
    description: "Ergonomic wireless mouse with silent clicks.",
    inStock: true
  },
  {
  id: 11,
  name: "USB-C Hub Adapter",
  price: 9800,
  category: "Electronics",
  image: "/outputImgs/stuff5.webp",
  description: "7-in-1 USB-C hub with HDMI, USB ports, and SD card reader.",
  inStock: true
},
{
  id: 12,
  name: "Classic Hoodie",
  price: 14500,
  category: "Clothing",
  image: "/outputImgs/stuff.webp",
  description: "Comfortable fleece hoodie perfect for casual wear.",
  inStock: true
},
{
  id: 13,
  name: "Web Development Handbook",
  price: 7200,
  category: "Books",
  image: "/outputImgs/stuff2.webp",
  description: "Practical guide covering HTML, CSS, and modern JavaScript.",
  inStock: true
},
{
  id: 14,
  name: "Wireless Earbuds",
  price: 16500,
  category: "Electronics",
  image: "/outputImgs/stuff3.webp",
  description: "True wireless earbuds with noise isolation and long battery life.",
  inStock: true
},
{
  id: 15,
  name: "Canvas Backpack",
  price: 18900,
  category: "Clothing",
  image: "/outputImgs/stuff4.webp",
  description: "Durable canvas backpack with multiple compartments.",
  inStock: true
}
];