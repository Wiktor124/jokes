import { fetchRandomJoke } from "./services/api.js";

function printRandomJoke(jokeId, joke) {
  document.querySelector('.random-joke__text').innerHTML = `<span class="joke" data-id="${jokeId}">${joke}</span>`;
}

// get a random joke by clicking
const randomJoke = async () => {
  const { jokeId, joke } = await fetchRandomJoke()
   printRandomJoke(jokeId, joke);
}
export default randomJoke;