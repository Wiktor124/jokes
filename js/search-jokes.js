import { fetchJokes } from "./api.js";

// search jokes by typing
const searchJokes = async () => {
  const searchThis = document.querySelector('#serach-joke__bar').value.trim();

  if (!searchThis) {
    return alert('Required Field')
  }

  const { results } = await fetchJokes(searchThis);
  const searchJokesContainer = document.querySelector('.search-jokes__list');
  
  searchJokesContainer.innerHTML = results.length === 0
    ? `<li class="joke">No results</li>`
    : results.map(({ joke }) => `<li class="joke">${joke}</li>`).join('');
}
export default searchJokes;