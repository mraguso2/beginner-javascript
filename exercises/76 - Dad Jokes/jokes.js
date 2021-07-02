const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

const jokeButton = document.querySelector('.getJoke');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

async function fetchJoke() {
  // turn loader on
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const data = await response.json();
  // turn loader off
  loader.classList.add('hidden');
  return data;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  const currButtonText = jokeButtonSpan.textContent.trim();
  const availableTextOptions = buttonText.filter(
    text => text !== currButtonText
  );
  const randomNumber = Math.floor(Math.random() * availableTextOptions.length);
  jokeButtonSpan.textContent = availableTextOptions[randomNumber];
  // jokeButtonSpan.textContent = randomItemFromArray(buttonText, jokeButtonSpan.textContent.trim());
}

jokeButton.addEventListener('click', handleClick);

// optional utility fn route
function randomItemFromArray(arr, not) {
  const availableItems = arr.filter(item => item !== not);
  const item =
    availableItems[Math.floor(Math.random() * availableItems.length)];
  return item;
}
