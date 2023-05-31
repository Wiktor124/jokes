import randomJoke from "./components/random-joke.js";
import searchJokes from "./components/search-jokes.js";
import "./components/create-dom-html.js";


document.querySelector('.random-joke__btn').addEventListener('click', async (e) => {
  await randomJoke()
  e.target.innerText = 'Get another joke!';
})

document.querySelector('.search-jokes__form').addEventListener('submit', async (e) => {
  e.preventDefault()
  await searchJokes()
  e.target.reset();
})


