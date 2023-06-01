const api = 'https://icanhazdadjoke.com'
const options = Object.freeze({
  headers: {
    Accept: "application/json"
  }
})

// get random joke
export const fetchRandomJoke = async (jokeId = '') => {
  const url = jokeId !== '' ? `${api}/j/${jokeId}` : api;

  console.log(url);
  
  try {
    return await fetch(url, options).then(response => response.json());
  } catch {
    throw new Error('Faild to fetch jokes!')
  }
};

// search jokes
export const fetchJokes = async (searchTerm) => {

  try {
    return await fetch(`${api}search?term=${searchTerm}`, options).then(response => response.json());
  } catch {
    throw new Error('Faild to fetch jokes!')
  }
};