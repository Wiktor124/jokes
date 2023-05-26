import { fetchJokes } from "./services/api.js";

// print jokes
function printJokes(jokesFound) {
  const jokesContainerList = document.querySelector('.search-jokes__list');

  jokesContainerList.innerHTML = jokesFound.length === 0
    ? `<li class="joke">No results</li>`
    : jokesFound.map(({ id, joke }) => `<li class="joke" data-id="${id}">${joke}</li>`).join('');
}

// search jokes by typing
let lastSearch = '';
const searchJokes = async () => {

  const searchThis = document.querySelector('#serach-joke__bar').value.trim();

  if (searchThis === '' || lastSearch === searchThis) {
    return
  }
  lastSearch = searchThis;

  const { results } = await fetchJokes(searchThis);

  printJokes(results);
}

export default searchJokes;