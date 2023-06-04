import { fetchJokes } from "../services/api.js";

// print jokes
function printJokes(jokesFound) {
  const jokesContainerList = document.querySelector('.search-jokes__list');

  jokesContainerList.innerHTML = jokesFound.length === 0
    ? `<li class="joke">No results</li>`
    : jokesFound.map(({ id, joke }) => `<li class="joke"><a href="./product.html?id=${id}">${joke}</a></li>`).join('');
}

// search jokes by typing
let lastSearch = '';
const searchJokes = async () => {

  const searchThis = document.querySelector('.serach-jokes__bar').value.trim();

  if (!searchThis || lastSearch === searchThis) {
    return
  }
  lastSearch = searchThis;

  const { results } = await fetchJokes(searchThis);

  printJokes(results);
}

function initSearchJokes() {
  document.querySelector('.search-jokes__form').addEventListener('submit', async (e) => {
    e.preventDefault()
    await searchJokes()
    e.target.reset();
  })
}
export default initSearchJokes;