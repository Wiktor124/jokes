const API = 'https://icanhazdadjoke.com/',
  config = Object.freeze({
    headers: {
      Accept: "application/json"
    }
  })

// fetch a random joke
export const fetchRandomJoke = async () => {
  try {
    const Joke = await fetch(API, config)
      .then(response => response.json())

    return Joke;
  } catch {
    throw new Error('Faild to fetch joke!')
  }
}

// fetch all jokes
export const fetchJokes = async (kindJoke) => {
  try {
    const jokes = await fetch(`${API}/search?term=${kindJoke}`, config)
      .then(response => response.json())

    return jokes;
  } catch {
    throw new Error('Faild to fetch jokes!')
  }
}