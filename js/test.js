
const joke = JSON.parse(localStorage.getItem('joke'))
console.log(joke);
document.querySelector('.container').innerHTML = joke.map(({ id, joke }) => {
  return `
    <h2>${id}</h2>
    <p>${joke}</p>
  `
})

