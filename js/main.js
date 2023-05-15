import randomJoke from "./random-joke.js";
import searchJokes from "./search-jokes.js";


document.querySelector('.random-joke__btn').addEventListener('click', async (e) => {
  await randomJoke()
  e.target.innerText = 'Get another joke!';
})

document.querySelector('#search-joke__form').addEventListener('submit', async (e) => {
  e.preventDefault()
  await searchJokes()
  e.target.reset();
})