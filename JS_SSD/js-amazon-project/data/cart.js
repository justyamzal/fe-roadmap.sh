export const cart = [];

export function addToCart(productId){
  
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
   
      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        cart.push({
          productId,
          quantity
        });
      }
}
