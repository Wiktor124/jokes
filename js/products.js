import './components/create-dom-html.js';
import initJokeUpdater from "./events/init-product-updater.js";
import initProducts from "./events/init-products.js";

window.onload = () => {
  initJokeUpdater();
  initProducts();
}
