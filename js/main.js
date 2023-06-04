import "./components/create-dom-html.js";
import initRandomJokes from "./components/random-joke.js";
import initSearchJokes from "./components/search-jokes.js";

window.onload = () => {
  initRandomJokes()
  initSearchJokes()
}
