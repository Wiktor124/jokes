import { ShoppingCart } from "./Cart.js";

function initRemoveFromCart() {
  document.querySelector('#cart-list').addEventListener('click', (e) => {
    const target = e.target;

    if (target.matches('.remove')) {
      const deleteFromCart = new ShoppingCart();
      deleteFromCart.removeProductById(target.dataset.id);
    }
  })

  document.querySelector('#clear-cart').addEventListener('click', () => {
    const clearCart = new ShoppingCart();
    clearCart.removeAllProducts();
  })
}
export default initRemoveFromCart;