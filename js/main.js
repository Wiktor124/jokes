import "./components/Dom-nodes-html.js";
import initRandomJokes from "./components/random-joke.js";
import initSearchJokes from "./components/search-jokes.js";
import initDashboard from './cart/dashboard.js'
import initRemoveFromCart from "./cart/delete.js";

window.onload = () => {
  initRandomJokes();
  initSearchJokes();
  initDashboard();
  initRemoveFromCart();
}