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
        <select>
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

      <div class="added-to-cart">
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

// for cart function, refers to add to cart button
/* steps :
  1. check if the product is already in the cart
  2.if it is in the cart, increate the quantity
  3. if it is not in the cart, add it to he cart with quantity 1
  4. update the cart quantity in the header
*/

 document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      //! Data Attribute : is jst another HTML attribte, allow us to attach any information to an element
      //dataset = basically gives us all the data attribute that are attached to this button
      const productId = button.dataset.productId;


      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1
        });
      }


      // Steps :
      /* 1.calculate the quantity
      2.put the quantity on the page

      */
      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;

      console.log(cartQuantity);
      console.log(cart);
    });
  });
