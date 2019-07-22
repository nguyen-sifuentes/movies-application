/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies,addMovie,deleteMovie} = require('./api.js');
const $ = require("jquery");

$('#deleteSubmit').on('click', function (e) {
    e.preventDefault();
    console.log(e);
    console.log('clicking delete button');
    let typeMovieId = $('#deleteMoviesSelect').find(":selected").val();
    console.log(typeMovieId);
    deleteMovie(typeMovieId);
    loaded();
});
function loaded() {
    $('#moreStuff').html(`<div>Here are all the movies: </div>`);
  getMovies().then((movies) => {
    $('#movieStuff').html('');
    let movie = '';
    movies.forEach(({title, rating, id}) => {
      movie += `<div class="text-justify">${title}</div><div class="text-justify">${rating} stars</div>`;
    });
    $(movie).appendTo('#movieStuff');

      $('#deleteMoviesSelect').html ("");
      let movieDelete = "<option>pick a movie to delete</option>";
      movies.forEach(({title, id}) => {
          movieDelete +=`<option value="${id}">${id}: ${title}</option>`;
      });
      // console.log(movieDelete);
      $('#deleteMoviesSelect').html(movieDelete).then($("#deleteSubmit").removeAttr("disabled"))

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