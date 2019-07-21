/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies,addMovie} = require('./api.js');
const $ = require("jquery");


function loaded() {
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
}
loaded();



 $('#userSubmit').click(()=> {
   let typeMovieTitle= $('#title').val();
   let typeMovieRating= $('#rating').val();
   addMovie(typeMovieTitle, typeMovieRating).then((response)=>{
     loaded()
  });
  console.log("movie add")
  }).catch(()=> {
   console.log("error")

 });

