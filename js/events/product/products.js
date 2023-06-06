import { changeProduct, changeProductColor, productsGenerator } from './details.js';
import { productData } from '../cart/detail.js';
import products from '../../configs/products-db.js';

const defaultProduct = products.shirts;
const thisProduct = [{ dataId: 1, defaultProduct }];
let selectedProduct = thisProduct[0].defaultProduct;
const productKeys = Object.keys(products);

const createProductImage = (imgSrc) => {
  return `<img src="${imgSrc}" class="square-image"/>`;
}

const createProductButton = (index, productValue) => {
  const button = document.createElement('button');
  button.className = 'productBtn';
  button.dataset.id = index + 1;
  button.innerHTML = createProductImage(productValue[0].img);
  return button;
}

function handleButtons(button) {
  const { dataId } = thisProduct[0];
  thisProduct[0].dataId = Number(button.dataset.id);
  button.dataset.id = dataId;
  button.innerHTML = createProductImage(selectedProduct[0].img);

  selectedProduct = products[productKeys[thisProduct[0].dataId - 1]];

  changeProduct.fireEvent({ selectedProduct });
  changeProductColor.fireEvent({ product: selectedProduct[0] });
  productData.fireEvent({ product: selectedProduct[0] })

}

function initProducts() {

  for (let i = 1; i < productKeys.length; i++) {
    const keyProduct = productKeys[i];
    const productValue = products[keyProduct];
    const button = createProductButton(i, productValue);

    productsGenerator.fireEvent({ button })
    button.addEventListener('click', () => handleButtons(button));
  }

  // Publish default product info
  changeProduct.fireEvent({ selectedProduct });
  productData.fireEvent({ product: selectedProduct[0] })
  
  const idColor = document.querySelector('input[type="radio"]').dataset.color;
  changeProductColor.fireEvent({ product: selectedProduct[Number(idColor) - 1] });

  document.querySelector('#radio-container').addEventListener('change', (e) => {
    const productFound = selectedProduct.find(item => item.idColor === e.target.dataset.color);
    changeProductColor.fireEvent({ product: productFound });
    productData.fireEvent({ product: productFound })

  });
}
export default initProducts;
