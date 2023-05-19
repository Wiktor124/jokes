import { fetchJokes } from "./api.js";

// search jokes by typing
let lastSearch;
const searchJokes = async () => {
  const searchThis = document.querySelector('#serach-joke__bar').value.trim();
  
  if (searchThis === '') {
    return alert('Required Field')
  }
  
  if(lastSearch === searchThis) {
    return
  }
  lastSearch = searchThis;

  const { results } = await fetchJokes(searchThis);
  const jokesContainerList = document.querySelector('.search-jokes__list');
  
  jokesContainerList.innerHTML = results.length === 0
    ? `<li class="joke">No results</li>`
    : results.map(({ joke }) => `<li class="joke">${joke}</li>`).join('');
}
export default searchJokes;