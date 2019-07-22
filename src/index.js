/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');

$('#moreStuff').html(`<h2>Here are all the movies: </h2>`);
getMovies().then((movies) => {
  movies.forEach(({title, rating, id}) => {
    $('#movieStuff').append(`<p>id#${id} - ${title} - rating: ${rating}</p>`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});

$('#stuff').append(`<option> here is our options</option>`);
