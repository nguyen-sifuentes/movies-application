module.exports = {
    getMovies: () => {
        return fetch('/api/movies')
            .then(response => response.json())
    },

    addMovie: (title, rating, genre) => {
        const movie = {title: title, rating: rating, genre: genre};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        };
        return fetch('/api/movies', options)

    },

    deleteMovie: (id) => {
        const movie = {id: id};
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        };
        return fetch(`/api/movies/${id}`, options)

    },

    adjustMovie: (title,rating,genre, id) => {
        const movie ={
            title: title,
            rating: rating,
            genre: genre
        };
        const url = `/api/movies/${id}`;
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie)
        };
        return fetch(url, options)
    },
};


