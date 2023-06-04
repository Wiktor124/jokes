import EventManager from "./observer.js";

const changeProductColor = new EventManager('color.product');
const changeProduct = new EventManager('product.change');
const productsGenerator = new EventManager('products.generator');
const changeProductInfo = new EventManager('product.information.change');


function printProduct({ detail: { product } }) {
  const { idColor, img, title, price } = product;

  const productContainer = document.querySelector('.product__img');
  productContainer.style.color = Number(idColor) === 1 ? 'white' : '';

   document.querySelector('#product__title').textContent = title
  document.querySelector('#product__price').textContent = price
  document.querySelector('.product__image').src = img;
}

function printAllProducts({ detail: { button } }) {
  const productsContainer = document.querySelector('#product-list')
  const li = document.createElement('li')
  li.appendChild(button)

  productsContainer.appendChild(li);
}

function generateRadioButtons({ detail: { selectedProduct } }) {
  const changeProductColorBtnContainer = document.querySelector('#radio-container');

  changeProductColorBtnContainer.innerHTML = selectedProduct.map(({ idColor }, index) => {
    const checked = index === 0 ? 'checked' : '';
    return `<input type="radio" name="color" data-color="${idColor}" ${checked} />`;
  }).join('');
}

function printProductInfo({ detail: { joke } }) {
  document.querySelector('.product__joke-shirt').textContent = joke

  document.querySelector('.product__joke-container').innerHTML = `
    <p><strong>Joke:</strong> ${joke}</p>
  `
}

// Subscribe events
changeProductColor.subscribe(printProduct)
productsGenerator.subscribe(printAllProducts)
changeProduct.subscribe(generateRadioButtons);
changeProductInfo.subscribe(printProductInfo)

export { changeProduct, changeProductColor, productsGenerator, changeProductInfo }