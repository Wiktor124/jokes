import { changeProductInfo } from '../events/details.js';
import { fetchRandomJoke } from '../services/api.js';
import randomJoke from '../components/random-joke.js';

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

function initJokeUpdater() {
  
  document.querySelector('.random-joke__btn').addEventListener('click', async (e) => {
    const { joke } = await randomJoke(true)
    getDefaultProductInfo = false
    defaultProductInfoOrNot()
  
    // publish random joke
    changeProductInfo.fireEvent({ joke })
    e.target.innerText = 'Get another joke!';
  })
}

export default initJokeUpdater;