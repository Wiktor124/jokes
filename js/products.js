import './components/create-dom-html.js';
import randomJoke from './components/random-joke.js';

document.querySelector('.random-joke__btn').addEventListener('click', async (e) => {
    await randomJoke()
    e.target.innerText = 'Get another joke!';
})
