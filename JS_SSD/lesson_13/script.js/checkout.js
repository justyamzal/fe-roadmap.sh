// Cart Checkout Functionality
const cart = JSON.parse(localStorage.getItem('cart')) || []
// If cart is empty, initialize it as an empty array

// Function to get product details by ID
function getProductById(productId) {
  return product.find((products) => product.id === id)
}

//render cart items in the cart container
const cartContainer = document.querySelector('.js-cart-items')
cartContainer.innerHTML = cart
  .map((item) => {
    const product = getProductById(item.productId)
    return `
  <div class="cart-item">
    <img src="${product.image}" alt="${product.name}" width="50">
    <span>${product.name}</span>
    <span>Quantity: ${item.quantity}</span>
    <span>Price:
  </div>

  `
  })
  .join('')

// Render cart items and update payment summary
document.addEventListener('DOMContentLoaded', function () {
  const cartContainer = document.querySelector('.js-cart-items')
  if (!cartContainer) return

  const cart = JSON.parse(localStorage.getItem('cart')) || []

  if (cart.length === 0) {
    cartContainer.innerHTML = '<div>Your cart is empty.</div>'
    document.querySelector('.js-summary-items-count').textContent = '0'
    document.querySelector('.js-summary-items-price').textContent = '$0.00'
    document.querySelector('.js-summary-shipping').textContent = '$0.00'
    document.querySelector('.js-summary-subtotal').textContent = '$0.00'
    document.querySelector('.js-summary-tax').textContent = '$0.00'
    document.querySelector('.js-summary-total').textContent = '$0.00'
    return
  }

  let totalItems = 0
  let itemsPrice = 0
  let shipping = 0

  cartContainer.innerHTML = cart
    .map((item) => {
      const product = products.find((product) => product.id === item.productId)
      if (!product) return ''
      totalItems += item.quantity
      itemsPrice += (product.priceCents * item.quantity) / 100
      shipping += 4.99 * item.quantity
      return `
      <div class="cart-item-details-grid">
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <div class="cart-item-details">
          <div class="product-name">${product.name}</div>
          <div class="product-price">$${(product.priceCents / 100).toFixed(
            2
          )}</div>
          <div class="product-quantity">Quantity: ${item.quantity}</div>
        </div>
      </div>
    `
    })
    .join('')

  const subtotal = itemsPrice + shipping
  const tax = subtotal * 0.1
  const total = subtotal + tax

  document.querySelector('.js-summary-items-count').textContent = totalItems
  document.querySelector(
    '.js-summary-items-price'
  ).textContent = `$${itemsPrice.toFixed(2)}`
  document.querySelector(
    '.js-summary-shipping'
  ).textContent = `$${shipping.toFixed(2)}`
  document.querySelector(
    '.js-summary-subtotal'
  ).textContent = `$${subtotal.toFixed(2)}`
  document.querySelector('.js-summary-tax').textContent = `$${tax.toFixed(2)}`
  document.querySelector('.js-summary-total').textContent = `$${total.toFixed(
    2
  )}`
})
