const BASE_URL = 'http://localhost:3000';

const movieToAdd = {
    id: 6,
    title: "Dead Poets Society",
    genre: "Drama",
    director: "Peter Weir",
    year: 1989
};

function postMovie(newMovie) {
    const options = {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };

    return fetch(`${BASE_URL}/movies`, options).then(r => r.json());
}

postMovie(movieToAdd);