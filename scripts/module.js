const storedCartCount = localStorage.getItem('cart')
const parsedStoredCount = JSON.parse(storedCartCount);
export let cartCount = parsedStoredCount?parsedStoredCount:0;

export const cartCountIncrease = () =>{
    cartCount = cartCount + 1;
    console.log(cartCount)
   localStorage.setItem('cart', JSON.stringify(cartCount));
}

export const cartArray = [];
export const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 18500,
    category: "Electronics",
    image: "images/headphones.jpg",
    description: "Noise-cancelling wireless headphones with long battery life.",
    inStock: true
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 32000,
    category: "Electronics",
    image: "images/smartwatch.jpg",
    description: "Fitness tracking smartwatch with heart rate monitor.",
    inStock: true
  },
  {
    id: 3,
    name: "Casual Cotton T-Shirt",
    price: 6500,
    category: "Clothing",
    image: "images/tshirt.jpg",
    description: "Comfortable cotton t-shirt available in multiple colors.",
    inStock: true
  },
  {
    id: 4,
    name: "Leather Sneakers",
    price: 27500,
    category: "Clothing",
    image: "images/sneakers.jpg",
    description: "Stylish and durable leather sneakers for everyday wear.",
    inStock: true
  },
  {
    id: 5,
    name: "JavaScript: The Complete Guide",
    price: 8900,
    category: "Books",
    image: "images/js-book.jpg",
    description: "Comprehensive guide to modern JavaScript development.",
    inStock: true
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 24500,
    category: "Electronics",
    image: "images/keyboard.jpg",
    description: "RGB mechanical keyboard with tactile switches.",
    inStock: true
  },
  {
    id: 7,
    name: "Portable Power Bank 20000mAh",
    price: 12500,
    category: "Electronics",
    image: "images/powerbank.jpg",
    description: "Fast-charging power bank with dual USB ports.",
    inStock: true
  },
  {
    id: 8,
    name: "Denim Jacket",
    price: 19500,
    category: "Clothing",
    image: "images/denim-jacket.jpg",
    description: "Classic denim jacket suitable for all seasons.",
    inStock: true
  },
  {
    id: 9,
    name: "Notebook Set (3 Pack)",
    price: 4500,
    category: "Books",
    image: "images/notebooks.jpg",
    description: "Set of 3 high-quality ruled notebooks.",
    inStock: true
  },
  {
    id: 10,
    name: "Wireless Mouse",
    price: 7800,
    category: "Electronics",
    image: "images/mouse.jpg",
    description: "Ergonomic wireless mouse with silent clicks.",
    inStock: true
  }
];