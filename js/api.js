const API = 'https://icanhazdadjoke.com/',
    config = Object.freeze({
      headers: {
        Accept: "application/json"
      }
    })

export const fetchJoke = async () => {
  const Joke = await fetch(API, config)
  .then(response => response.json())

  return Joke;
}

export const fetchJokes = async (kindJoke) => {
  const jokes = await fetch(`${API}/search?term=${kindJoke}`, config)
  .then(response => response.json())

  return jokes;
}