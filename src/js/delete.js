const BASE_URL = 'http://localhost:3000';

function deleteMovie(id) {
    return fetch(`${BASE_URL}/movies/${id}`, { method: "DELETE" }).then(r => r.json());
}

deleteMovie(2);