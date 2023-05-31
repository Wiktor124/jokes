import productPrintUpdater from "./events/product-print-updater.js";
import printProducts from "./events/product-updater.js";

window.onload = () => {
  productPrintUpdater();
  printProducts();
}
// import './components/create-dom-html.js';
// import randomJoke from './components/random-joke.js';
// import { ChangeProductJoke, changeProduct } from './events/observer.js';
// import { fetchRandomJoke } from './services/api.js';
// import products from './configs/products-db.js';

// const changeProductInfo = new ChangeProductJoke('changeProductInfo');
// const productCharacteristics = new ChangeProductJoke('changeproduct');
// let getDefaultProductInfo = true;


// function printProductInfo({ detail: { joke } }) {

//   document.querySelector('.product__joke-shirt').textContent = joke

//   document.querySelector('.product__text').innerHTML = `
//     <h1>ProductName</h1>
//     <h2>Price</h2>
//     <p><strong>Joke:</strong> ${joke}</p>
//   `

// }

// function printProducts({ detail }) {
//   console.log(productCharacteristics);
//   console.log(detail);

//   document.querySelector('.products').innerHTML = `<li><button><img src="${''}" /></button></li>`
// }
// productCharacteristics.subscribe(printProducts)
// changeProductInfo.subscribe(printProductInfo)

// // select default or ra
// async function defaultProductInfoOrNot() {

//   if (getDefaultProductInfo) {
//     const defaultProductId = new URLSearchParams(window.location.search).get('productId')
//     const { id, joke } = await fetchRandomJoke(defaultProductId)

//     changeProductInfo.fireEvent({ joke })
//   } else {
//     return;
//   }
// }
// defaultProductInfoOrNot()

// function chooseProduct() {
 
// }


// document.querySelector('.random-joke__btn').addEventListener('click', async (e) => {
//   const { id, joke } = await randomJoke(true)
//   getDefaultProductInfo = false
//   defaultProductInfoOrNot()

//   changeProductInfo.fireEvent({ id, joke })

//   e.target.innerText = 'Get another joke!';
// })

// // const radioContainer = document.getElementById('radio-container');
// //   const options = ['Opción 1', 'Opción 2', 'Opción 3','Opción 4']; // Tu arreglo de elementos

// //   options.slice(0, 4).forEach(option => {
// //     const radio = document.createElement('input');
// //     radio.type = 'radio';
// //     radio.name = 'option';
// //     radio.value = option;

// //     // const label = document.createElement('label');
// //     // label.textContent = option;

// //     radio.addEventListener('change', () => {
// //       if (radio.checked) {
// //         console.log(radio.value);
// //       }
// //     });

// //     radioContainer.appendChild(radio);
// //     // radioContainer.appendChild(label);
// //   });
