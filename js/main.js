import randomJoke from "./components/random-joke.js";
import searchJokes from "./components/search-jokes.js";
import "./components/create-dom-html.js";


document.querySelector('.random-joke__btn').addEventListener('click', async (e) => {
  await randomJoke()
  e.target.innerText = 'Get another joke!';
})

document.querySelector('#search-joke__form').addEventListener('submit', async (e) => {
  e.preventDefault()
  await searchJokes()
  // Get all the desired nodes
  const allNodes = document.querySelectorAll(".joke");
  console.log(allNodes);

  // Add a click handler to each node
  allNodes.forEach(addClickHandler);

  function addClickHandler(node) {
    node.addEventListener("click", function () {
      console.log("Hiciste clic en el nodo: " + node.dataset.id);
    });
  }
  e.target.reset();
})


