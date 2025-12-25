// SPA navigation
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(page).classList.remove('hidden');
}

// USD to INR
const usdToInr = 83;

// 20 products with blank images + name + description
const products = [
  {id:1,name:"Smart Watch",desc:"Track your fitness and style.",price:150,img:"https://via.placeholder.com/200"},
  {id:2,name:"Wireless Earbuds",desc:"Crystal clear sound anytime.",price:80,img:"https://via.placeholder.com/200"},
  {id:3,name:"Gaming Mouse",desc:"Precision and comfort combined.",price:40,img:"https://via.placeholder.com/200"},
  {id:4,name:"Laptop Backpack",desc:"Carry your essentials safely.",price:60,img:"https://via.placeholder.com/200"},
  {id:5,name:"Bluetooth Speaker",desc:"Portable music on the go.",price:70,img:"https://via.placeholder.com/200"},
  {id:6,name:"Smartphone Stand",desc:"Perfect angle for video calls.",price:15,img:"https://via.placeholder.com/200"},
  {id:7,name:"Desk Lamp",desc:"Brighten your workspace.",price:30,img:"https://via.placeholder.com/200"},
  {id:8,name:"Fitness Band",desc:"Monitor your health easily.",price:50,img:"https://via.placeholder.com/200"},
  {id:9,name:"Wireless Charger",desc:"Fast charging anytime.",price:25,img:"https://via.placeholder.com/200"},
  {id:10,name:"Travel Mug",desc:"Keep your drink hot or cold.",price:20,img:"https://via.placeholder.com/200"},
  {id:11,name:"Notebook Set",desc:"Organize your thoughts beautifully.",price:12,img:"https://via.placeholder.com/200"},
  {id:12,name:"Water Bottle",desc:"Stay hydrated all day.",price:18,img:"https://via.placeholder.com/200"},
  {id:13,name:"Gaming Keyboard",desc:"Responsive and colorful.",price:90,img:"https://via.placeholder.com/200"},
  {id:14,name:"Portable Hard Drive",desc:"Store all your files securely.",price:75,img:"https://via.placeholder.com/200"},
  {id:15,name:"Earphone Case",desc:"Protect your earbuds in style.",price:10,img:"https://via.placeholder.com/200"},
  {id:16,name:"Sunglasses",desc:"Stylish and UV protected.",price:45,img:"https://via.placeholder.com/200"},
  {id:17,name:"Backpack Rain Cover",desc:"Keep your bag dry.",price:15,img:"https://via.placeholder.com/200"},
  {id:18,name:"Desk Organizer",desc:"Tidy up your workspace.",price:35,img:"https://via.placeholder.com/200"},
  {id:19,name:"Coffee Mug",desc:"Start your day with a smile.",price:12,img:"https://via.placeholder.com/200"},
  {id:20,name:"Wall Clock",desc:"Track time stylishly.",price:40,img:"https://via.placeholder.com/200"}
];

// Cart
let cart = [];

// Display products
const productsDiv = document.getElementById("products");
function displayProducts() {
  productsDiv.innerHTML = "";
  products.forEach(p=>{
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <p>₹${p.price * usdToInr}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productsDiv.appendChild(div);
  });
}
displayProducts();

// Add to cart
function addToCart(id) {
  const product = products.find(p=>p.id===id);
  cart.push(product);
  alert(`${product.name} added to cart`);
  updateCart();
}

// Update cart page
function updateCart() {
  const cartDiv = document.getElementById("cartItems");
  cartDiv.innerHTML = "";
  cart.forEach((item,i)=>{
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name} - ₹${item.price * usdToInr}</span>
      <button onclick="removeFromCart(${i})">Remove</button>
    `;
    cartDiv.appendChild(div);
  });
}

// Remove from cart
function removeFromCart(index) {
  cart.splice(index,1);
  updateCart();
}

// Checkout
function checkout() {
  if(cart.length===0){alert("Cart empty!"); return;}
  alert("Order placed successfully!");
  cart=[];
  updateCart();
}

// Login/Register mock
function login(e) {
  e.preventDefault();
  alert("Logged in successfully!");
  showPage("home");
}
function register(e) {
  e.preventDefault();
  alert("Registered successfully!");
  showPage("home");
}
