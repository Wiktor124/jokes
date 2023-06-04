import { changeProductInfo } from './details.js';
import { fetchRandomJoke } from '../services/api.js';

let getDefaultProductInfo = true;

async function defaultProductInfoOrNot() {

  if (getDefaultProductInfo) {
    const jokeId = new URLSearchParams(window.location.search).get('id')
    const { joke } = await fetchRandomJoke(jokeId)

    // publish default joke
    changeProductInfo.fireEvent({ joke })
  }

  return;
}
defaultProductInfoOrNot()

function initRandomJokeUpdater() {

  document.querySelector('.random-joke__btn').addEventListener('click', async (e) => {
    const { joke } = await fetchRandomJoke()
    getDefaultProductInfo = false
    defaultProductInfoOrNot()

    document.querySelector('.random-joke__text').textContent = joke

    // publish random joke
    changeProductInfo.fireEvent({ joke })
    e.target.innerText = 'Get another joke!';
  })
}

export default initRandomJokeUpdater;