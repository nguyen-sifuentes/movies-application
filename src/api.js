module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json())
  },
  createMovie: (request) => {
    return fetch('/api/movies/')
        .then(response => response.json())
  },
  deleteMovie: (num) => {
    return fetch('/api/movies/')
        .then(response => response.json())

  }
};
