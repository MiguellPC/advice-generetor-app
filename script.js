const url = 'https://api.adviceslip.com/advice';

const adviceID = document.querySelector('#adviceID');
const adviceText = document.querySelector('#adviceText');
const adviceBtn = document.querySelector('#adviceBtn');

const fetchAdvice = () => {
  if (adviceID.innerHTML !== '' && adviceText.innerHTML !== '') {
    adviceID.innerHTML = '';
    adviceText.innerHTML = '';
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      adviceID.innerHTML = 'ADVICE #' + data.slip.id;
      adviceText.innerHTML = '"' + data.slip.advice + '"';
    })
    .catch(err => console.log(err));
}

fetchAdvice();

adviceBtn.addEventListener('click', fetchAdvice);