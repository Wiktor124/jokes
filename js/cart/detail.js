import { ProductInfo } from "../product/Product-Info.js";
import EventManager from "../Observer.js";

const productData = new EventManager('get.product.data');
const getProductJoke = new EventManager('get.product.joke');

function getProduct({ detail: { product } }) {
  ProductInfo.product(product);
}

function getJoke({ detail }) {
  ProductInfo.joke(detail)
}

productData.subscribe(getProduct);
getProductJoke.subscribe(getJoke);
export { productData, getProductJoke }