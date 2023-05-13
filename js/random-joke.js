import  { fetchJoke } from "./api.js";

// get a random joke by clicking
const randomJoke = async () => {
  const { joke } = await fetchJoke()

  document.querySelector('.random-joke__text').innerHTML = `<span>${joke}</span>`;
}
export default randomJoke;