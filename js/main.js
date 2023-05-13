import randomJoke from "./random-joke.js";
import searchJokes from "./search-jokes.js";

document.querySelector('.container').addEventListener('click', async (e) => {
  const btn = e.target;
  
  if(btn.matches('.random-joke__btn')) {
    await randomJoke()
    btn.textContent = 'Get another joke!'
  }

  if(btn.matches('.search-joke__btn')) {
    await searchJokes()
  }
})