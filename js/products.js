import productPrintUpdater from "./events/product-print-updater.js";
import printProducts from "./events/product-updater.js";

window.onload = () => {
  productPrintUpdater();
  printProducts();
}
