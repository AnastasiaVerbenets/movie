const BASE_URL = 'http://localhost:3000';

const allBtn = document.getElementById('all-btn');
const list = document.getElementById('list');

allBtn.addEventListener('click', allBtnClick);

function fetchMovies() {
  return fetch(`${BASE_URL}/movies`).then(r => r.json());
}

function allBtnClick() {
  fetchMovies().then(renderMovies);
}

function renderMovies(movies) {
  const markUp = movies.map(movie => {
    return `
      <li class="movies__item">
        <div class="movies__thumb">
          <img src="${movie.img}" alt="movie" class="movies__img"  onerror="this.src='https://via.placeholder.com/150';"/>
          <h2 class="movies__title"><b>Title: ${movie.title}</b></h2>
          <p class="movies__genre"><b>Genre: ${movie.genre}</b></p>
          <p class="movies__director">
            <b>Director: ${movie.director}</b>
          </p>
          <p class="movies__year"><b>Year: ${movie.year}</b></p>
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