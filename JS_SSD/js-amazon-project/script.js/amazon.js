import {cart} from '../data/cart.js';
import {products} from '../data/products.js'

let productsHTML = '';



products.forEach((product) => {
  productsHTML += `
    <!-- ----- Images -->

    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <!-- ----- Rating label -->

      <div class="product-rating-container">
      <!-- so this number * 10 is converting the rating into non decimal,so it will fit with the numbers on images folder -->
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <!-- --- Price Tag, toFixed shows 2 number after coma, 100 cents = 1 dollar -->

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select class="js-quantity-selector-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart js-added-to-cart-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <! ----- Data Attribute : is jst another HTML attribte, allow us to attach any information to an element -->

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

// getting products grid element class for eventlisteners from index.html and adding couple element then sending back to index.html
document.querySelector('.js-products-grid').innerHTML = productsHTML;

const addedMessageTimeouts = {};

// for cart function, refers to add to cart button
/* steps :
  1. check if the product is already in the cart
  2.if it is in the cart, increate the quantity
  3. if it is not in the cart, add it to he cart with quantity 1
  4. update the cart quantity in the header
*/

 document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    let addedMessageTimeoutId;
    button.addEventListener('click', () => {
      //! Data Attribute : is jst another HTML attribte, allow us to attach any information to an element
      //* dataset = basically gives us all the data attribute that are attached to this button
      const productId = button.dataset.productId;
      // const productId = button.dataset;
      
      let matchingItem;
      
      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });

      //----- 13d. -----// 
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
      //----- 13e. -----//
      const quantity = Number(quantitySelector.value);
      //  console.log(quantity);  

      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        cart.push({

          productId,
          quantity
        });
      }
      // Steps :
      /* 1.calculate the quantity
      2.put the quantity on the page*/

      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
      
      //----- 13f. -----//
      // console.log(cartQuantity);
      // console.log(cart);
      
      //----- 13g. -----//
      //----- 13h. -----//
      //----- 13i. -----//
      //----- 13k. -----//
      //----- 13l. -----//
      const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);

      addedMessage.classList.add('added-to-cart-visible'); 
      
      // setTimeout(() => {
      //   addedMessage.classList.remove('added-to-cart-visible');
      // }, 2000);

      // product. If there is, we should stop it.
      const previousTimeoutId = addedMessageTimeouts[productId];
      if (previousTimeoutId) {
        clearTimeout(previousTimeoutId);
      }

      const timeoutId = setTimeout(() => {
        addedMessage.classList.remove('added-to-cart-visible');
      }, 2000);

      // Save the timeoutId for this product
      // so we can stop it later if we need to.
      addedMessageTimeouts[productId] = timeoutId;

    });
  });
