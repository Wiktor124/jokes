import { changeProductInfo } from './details.js';
import { fetchRandomJoke } from '../services/api.js';
import { getProductJoke } from '../cart/detail.js'

let getDefaultProductInfo = true;

async function defaultJokeOrNot() {

  if (getDefaultProductInfo) {
    const jokeId = new URLSearchParams(window.location.search).get('id')
    const { id, joke } = await fetchRandomJoke(jokeId)

    // publish default joke
    changeProductInfo.fireEvent({ joke })
    getProductJoke.fireEvent({ id, joke })
  }

  return;
}
defaultJokeOrNot()

function initRandomJokeUpdater() {

  document.querySelector('.random-joke__btn').addEventListener('click', async (e) => {
    const { id, joke } = await fetchRandomJoke()
    getDefaultProductInfo = false
    defaultJokeOrNot()

    document.querySelector('.random-joke__text').textContent = joke

    // publish random joke
    changeProductInfo.fireEvent({ joke })
    getProductJoke.fireEvent({ id, joke })
    e.target.innerText = 'Get another joke!';
  })
}

export default initRandomJokeUpdater;