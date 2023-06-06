import './components/Dom-nodes-html.js';
import initDashboard from './events/cart/dashboard.js'
import initJokeUpdater from "./events/product/joke-updater.js";
import initProducts from "./events/product/products.js";
import initAddToCart from './events/cart/add-to-cart.js';
import initRemoveFromCart from "./events/cart/delete.js";

window.onload = () => {
  initJokeUpdater();
  initProducts();
  initDashboard();
  initAddToCart();
  initRemoveFromCart();
}