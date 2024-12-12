import movies from '../../db.json';

const allBtn = document.getElementById('all-btn');

const BASE_URL = 'http://localhost:3000';

allBtn.addEventListener('click', fetchMovies)

function fetchMovies() {
  return fetch(`${BASE_URL}/movies`).then(r => r.json());
}