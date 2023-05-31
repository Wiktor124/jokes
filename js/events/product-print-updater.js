import '../components/create-dom-html.js';
import randomJoke from '../components/random-joke.js';
import { ChangeProductJoke } from '../events/observer.js';
import { fetchRandomJoke } from '../services/api.js';

const changeProductInfo = new ChangeProductJoke('changeProductInfo');
let getDefaultProductInfo = true;


function printProductInfo({ detail: { joke } }) {
  document.querySelector('.product__joke-shirt').textContent = joke

  document.querySelector('.product__joke-container').innerHTML = `
    <p><strong>Joke:</strong> ${joke}</p>
  `
}
changeProductInfo.subscribe(printProductInfo)

async function defaultProductInfoOrNot() {

  if (getDefaultProductInfo) {
    const defaultProductId = new URLSearchParams(window.location.search).get('productId')
    const { joke } = await fetchRandomJoke(defaultProductId)

    // publish default joke
    changeProductInfo.fireEvent({ joke })
  } else {
    return;
  }
}
defaultProductInfoOrNot()

function productPrintUpdater() {
  
  document.querySelector('.random-joke__btn').addEventListener('click', async (e) => {
    const { joke } = await randomJoke(true)
    getDefaultProductInfo = false
    defaultProductInfoOrNot()
  
    // publish joke
    changeProductInfo.fireEvent({ joke })
  
    e.target.innerText = 'Get another joke!';
  })
}

export default productPrintUpdater;