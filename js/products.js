import './components/Dom-nodes-html.js';
import initDashboard from './cart/dashboard.js'
import initJokeUpdater from "./product/joke-updater.js";
import initProducts from "./product/products.js";
import initAddToCart from './cart/add-to-cart.js';
import initRemoveFromCart from "./cart/delete.js";

window.onload = () => {
  initJokeUpdater();
  initProducts();
  initDashboard();
  initAddToCart();
  initRemoveFromCart();
}