/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies,addMovie,deleteMovie,adjustMovie} = require('./api.js');
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
$('#makeChange').on('click', (e) => {
    e.preventDefault();
    console.log('pressing the button');
    let fixMovie = $('#adjustMovie').find(":selected").val();
    console.log(fixMovie);
    let newRating = $('#fixRating').find(":selected").val();
    let newName = $('#fixName').val();
    adjustMovie(newName,newRating, fixMovie);
    loaded();
});
function loaded() {
    $('#moreStuff').html(`<div>Here are all the movies: </div>`);

    getMovies().then((movies) => {

        $('#movieStuff').html('');
        let movie = '';
        movies.forEach(({title, rating, id}) => {
            movie += `<div class="text-align-center"">${title} -${rating} ✫</div>`;
        });
        $(movie).appendTo('#movieStuff');


        $('#adjustMovie').html("");
        let fixMovie = "<option>pick a movie to edit</option>";
        movies.forEach(({title, id}) => {
            fixMovie +=`<option value="${id}">${id}: ${title}</option>`;
        });
        $('#adjustMovie').html(fixMovie);


        $('#deleteMoviesSelect').html ("");
        let movieDelete = "<option>pick a movie to delete</option>";
        movies.forEach(({title, id}) => {
            movieDelete +=`<option value="${id}">${id}: ${title}</option>`;
        });
        $('#deleteMoviesSelect').html(movieDelete).then($("#deleteSubmit").removeAttr("disabled"))


    }).catch(() => {
        console.log('error');
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

