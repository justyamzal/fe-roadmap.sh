// Cart Checkout Functionality
const cart = JSON.parse(localStorage.getItem('cart')) || [];
// If cart is empty, initialize it as an empty array


// Function to get product details by ID
function getProductById(productId) {
  return product.find(products => product.id === id)
}

//render cart items in the cart container
const cartContainer = document.querySelector('.js-cart-items');
cartContainer.innerHTML = cart.map(item => {
  const product = getProductById(item.productId);
  return `
  <div class="cart-item">
    <img src="${product.image}" alt="${product.name}" width="50">
    <span>${product.name}</span>
    <span>Quantity: ${item.quantity}</span>
    <span>Price:
  </div>

  `;

}).join('');
