const url = 'https://api.adviceslip.com/advice';

const container = document.querySelector('.container');
const adviceID = document.querySelector('#adviceID');
const adviceText = document.querySelector('#adviceText');
const adviceBtn = document.querySelector('#adviceBtn');

const displayLoading = () => {
  const div = document.createElement('div');
  div.classList.add('loading-container');
  div.innerHTML = `
    <div class="gooey">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;

  container.removeChild(adviceID);
  container.removeChild(adviceText);

  container.prepend(div);
}

const removeLoading = () => {
  const loading = document.querySelector('.loading-container');
  if (loading) {
    setTimeout(() => {
      loading.remove();
      container.prepend(adviceText);
      container.prepend(adviceID);
    }, 2000);
  }
}

const fetchAdvice = () => {
  if (adviceID.innerHTML !== '' && adviceText.innerHTML !== '') {
    adviceID.innerHTML = '';
    adviceText.innerHTML = '';
  }

  displayLoading();

  fetch(url)
    .then(response => response.json())
    .then(data => {
      removeLoading();
      adviceID.innerHTML = `ADVICE # ${data.slip.id}`;
      adviceText.innerHTML = `"${data.slip.advice}"`;
    })
    .catch(err => console.log(err));
}

fetchAdvice();

adviceBtn.addEventListener('click', fetchAdvice);