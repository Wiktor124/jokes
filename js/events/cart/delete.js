import { ShoppingCart } from "./Cart.js";

function initRemoveFromCart() {
  document.querySelector('#cart-list').addEventListener('click', (e) => {
    const target = e.target;

    if (target.matches('.remove')) {
      const deleteFromCart = new ShoppingCart();
      deleteFromCart.removeProductById(target.dataset.id);

      ShoppingCart.printProducts();
    }
  })

  document.querySelector('#clear-cart').addEventListener('click', () => {
    const clearCart = new ShoppingCart();
    clearCart.removeAllProducts();

    ShoppingCart.printProducts();
  })
}
export default initRemoveFromCart;