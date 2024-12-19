const BASE_URL = 'http://localhost:3000';

const allBtn = document.getElementById('all-btn');
const list = document.getElementById('list');

allBtn.addEventListener('click', allBtnClick);

async function fetchMovies() {
  const response = await fetch(`${BASE_URL}/movies`);

  if (!response.ok) {
    throw new Error('Fail to fetch');
  }

  return await response.json();
}

async function allBtnClick() {
  try {
    const movies = await fetchMovies();
    renderMovies(movies);
  } catch (error) {
    console.error('Fail to render');
  }
}

function renderMovies(movies) {
  const markUp = movies.map(({ image, title, genre, director, year }) => {
    return `
      <li class="movies__item">
        <div class="movies__thumb">
          <img src="${image}" alt="movie" class="movies__img"  onerror="this.src='https://via.placeholder.com/150';"/>
          <h2 class="movies__title"><b>Title: ${title}</b></h2>
          <p class="movies__genre"><b>Genre: ${genre}</b></p>
          <p class="movies__director">
            <b>Director: ${director}</b>
          </p>
          <p class="movies__year"><b>Year: ${year}</b></p>
        </div>
        <div>
          <button class="movies__btn" type="button" id="edit-btn">Edit</button>
          <button class="movies__btn" type="button" id="delete-btn">
            Delete
          </button>
        </div>
      </li>
    `;
  }).join('');

  list.insertAdjacentHTML('beforeend', markUp);
}