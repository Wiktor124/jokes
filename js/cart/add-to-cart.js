import { ProductInfo } from "../product/Product-Info.js";
import { ShoppingCart } from "./Cart.js";

function initAddToCart() {
  document.querySelector('#add-to-cart').addEventListener('click', () => {
    const cart = new ShoppingCart()
    cart.addProduct(ProductInfo.productData)
  });
}

export default initAddToCart;