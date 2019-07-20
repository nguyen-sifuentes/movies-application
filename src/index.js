/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');
const $ = require('jquery');

getMovies().then((movies) => {
  $('#moreStuff').html(`<div>Here are all the movies: </div>`);
  $('#movieStuff').html('');
  let movie = '';
  movies.forEach(({title, rating, id}) => {
    movie += `<div>${title} - rating: ${rating}</div>`;
  });
  $(movie).appendTo('#movieStuff')
}).catch((error) => {
  console.log(error);
});

// var tbody = document.querySelector('#movies');
// var submitButton = document.querySelector('#submit');
//
// var myInput = document.querySelector("#myInput");
//
// var userInput = document.querySelector('#userInput');
// var userMovie = document.querySelector('#userSubmit');
//
// tbody.innerHTML = renderMovies(movies);

// submitButton.addEventListener('click', updateMovies);
// userMovie.addEventListener('click', inputMovie);