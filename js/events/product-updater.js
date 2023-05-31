import { ChangeProduct } from '../events/observer.js';
import products from '../configs/products-db.js';

const changeProduct = new ChangeProduct('changeProduct');
const changeProductColor = new ChangeProduct('changeProductColor');

const productsContainer = document.querySelector('#product-list');
const chageProductColorBtn = document.querySelector('#radio-container')

function generateRadioButtons({ detail }) {
  const selectedProduct = detail.selectedProduct

  chageProductColorBtn.innerHTML = selectedProduct.map(({ idColor }, index) => {
    const checked = index === 0 ? 'checked' : '';

    return `<input type="radio" name="color" data-color="${idColor}" ${checked} />`;
  }).join('')
}

function productColor({ detail: { product } }) {
  const { idColor, img, title, price } = product

  const productContainer = document.querySelector('.product__img');
  productContainer.style.color = Number(idColor) === 1 ? 'white' : '';

  document.querySelector('.product__info').innerHTML = `
  <h1>${title}</h1>
  <h2>${price}</h2>
  `;

  document.querySelector('.imageProduct').innerHTML = `
  <img src="${img}" class="product__image"/>
  `;
}

// subscribe events
changeProduct.subscribe(generateRadioButtons);
changeProductColor.subscribe(productColor)

function createProductImage(imgSrc) {
  return `<img src="${imgSrc}" class="square-image"/>`;
}

function createProductButton(index, productValue) {
  const button = document.createElement('button');
  button.className = 'productBtn';
  button.dataset.id = index + 1;
  button.innerHTML = createProductImage(productValue[0].img);
  return button;
}


function printProducts() {
  const defaultProduct = products.shirts;
  const thisProduct = [{ dataId: 1, defaultProduct }];

  let selectedProduct = thisProduct[0].defaultProduct;
  const productsArray = Object.keys(products);

  for (let i = 1; i < productsArray.length; i++) {
    const keyProduct = productsArray[i];
    const productValue = products[keyProduct];

    const button = createProductButton(i, productValue);
    button.addEventListener('click', () => {
      const dataId = Number(button.dataset.id);
      const tempId = thisProduct[0].dataId;

      thisProduct[0].dataId = dataId;

      button.dataset.id = tempId;
      button.innerHTML = createProductImage(selectedProduct[0].img);

      selectedProduct = products[productsArray[thisProduct[0].dataId - 1]];

      // publish selected product info
      changeProduct.fireEvent({ selectedProduct });
      changeProductColor.fireEvent({ product: selectedProduct[0] });
    });

    productsContainer.appendChild(button);
  }

  // publish default product info
  changeProduct.fireEvent({ selectedProduct });
  const idColor = document.querySelector('input[type="radio"]').dataset.color;

  changeProductColor.fireEvent({ product: selectedProduct[Number(idColor) - 1] });
  chageProductColorBtn.addEventListener('change', (e) => {
    const thisProduct = selectedProduct.find(item => item.idColor === e.target.dataset.color);
    changeProductColor.fireEvent({ product: thisProduct });
  });
}


export default printProducts;
