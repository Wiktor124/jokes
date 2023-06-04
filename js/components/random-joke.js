import { fetchRandomJoke } from "../services/api.js";

function printRandomJoke(jokeId, joke) {
  const textContainer = document.querySelector('.random-joke__text')
  textContainer.innerHTML = `<a href="product.html?id=${jokeId}">${joke}</a>`
}

// get a random joke by clicking
async function randomJoke() {
  const { id, joke } = await fetchRandomJoke()
  printRandomJoke(id, joke);
}

function initRandomJokes() {
  document.querySelector('.random-joke__btn').addEventListener('click', async (e) => {
    await randomJoke()
    e.target.innerText = 'Get another joke!';
  })
}
export default initRandomJokes;