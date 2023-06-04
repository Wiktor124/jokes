import './components/create-dom-html.js';
import initJokeUpdater from "./events/product-joke-updater.js";
import initProducts from "./events/init-products.js";

window.onload = () => {
  initJokeUpdater();
  initProducts();
}
