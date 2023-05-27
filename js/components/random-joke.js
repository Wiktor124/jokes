import { fetchRandomJoke } from "../services/api.js";

function printRandomJoke(jokeId, joke) {
  const textContainer = document.querySelector('.random-joke__text')
  const query = new URLSearchParams(window.location.search).get('productId')

  if (query === null) {
    textContainer.innerHTML = `<a href="product.html?productId=${jokeId}">${joke}</a>`
  } else {
    textContainer.innerHTML = `<span class="joke">${joke}</span>`
  }
  
}

// get a random joke by clicking
const randomJoke = async () => {
  const { id, joke } = await fetchRandomJoke()
   printRandomJoke(id, joke);
}
export default randomJoke;