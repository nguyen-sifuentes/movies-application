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
    $('#moreStuff').html('');
  getMovies().then((movies) => {
    $('#movieStuff').html('');
    let movie = '';
    movies.forEach(({title, rating, id}) => {
      movie += `<div class="text-align-center">${title}</div><div class="text-align-center">${rating} stars</div>`;
    });
    $(movie).appendTo('#movieStuff');

      $('#deleteMoviesSelect').html ("");
      let movieDelete = "<option>pick a movie to delete</option>";
      movies.forEach(({title, id}) => {
          movieDelete +=`<option value="${id}">${id}: ${title}</option>`;
      });
      // console.log(movieDelete);
      $('#deleteMoviesSelect').html(movieDelete).then($("#deleteSubmit").removeAttr("disabled"))

      $('#editMoviesSelect').html ("");
      let movieEdit = "<option>pick a movie to change</option>";
      movies.forEach(({title, id}) => {
          movieEdit +=`<option value="${id}">${id}: ${title}</option>`;
      });
      // console.log(movieDelete);
      $('#editMoviesSelect').html(movieEdit).then($("#editSubmit").removeAttr("disabled"))

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

$('#editSubmit').click(()=> {
    let typeMovieRating= $('#editRating').val();
    editMovie(typeMovieRating).then((response)=>{
        loaded()
    });
    console.log("movie edit")
}).catch(()=> {
    console.log("error")

});