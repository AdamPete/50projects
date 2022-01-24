const jokeEl = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}

const generateQuote = async function () {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://whatever', config);
  const data = await res.json();

  const markup = `
     <p class="card-text">${data}</p>
  `;

  textel.insertAdjacentHTML('beforebegin', markup);
};

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
