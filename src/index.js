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
    e.preventDefault()
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
      movie += `<div> id#${id} - ${title} - rating: ${rating}</div>`;
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

// var e = document.getElementById("ddlViewBy");
//     let strUser = typeMovieId.options[typeMovieId.selectedIndex].value;
// $('#deleteSubmit').click((e)=> {
//     console.log(e);
//     e.preventDefault();
//     console.log('clicking delete button');
//     let typeMovieId = $('#deleteMoviesSelect').find(":selected").val();
//     console.log(typeMovieId);
//     // let typeMovieRating= $('#rating').val();
//     // deleteMovie(typeMovieId).then((response)=>{
//     //     loaded()
//     // });
//     // console.log("movie add")
// }).catch(()=> {
//     console.log("error")

// });
// let deleteMovieData;

// const deleteMovies = () =>
//         console.log('deleteMoviesFunction');
    // getMovies().then((movies) => {
        // console.log('Here are all the movies:');
    //     $('#deleteMoviesSelect').html ("");
    //     let movieDelete = "<option>pick a movie to delete</option>";
    //     movies.forEach(({title, rating, id}) => {
    //         movieDelete +=`<option value="${title}">${title}</option>`;
    //     });
    //     console.log(movieDelete);
    //     $('#deleteMoviesSelect').html(movieDelete).then($("#deleteSubmit").removeAttr("disabled"))
    // })
    //gets value for movies option tag
    //     .then($("select#deleteMovies").change(function(){
    //         deleteMovieData = $(this).children("option:selected").val();
    //         console.log(deleteMovieData)
    //     }))
    //     .catch((error) => {
    //         console.log(error);
    //     });


//Deletes a movie on submit
// $('#deleteSubmit').click(function (e) {
//     e.preventDefault();
//     getMovies().then((movieData) => {
//         movieData.forEach(({title, rating, id}) => {
//             if(deleteMovieData===title){
//                 const userMovies = {
//                     title: title,
//                     rating: rating
//                 };
//                 const url = '/api/movies/'+id;
//                 const options = {
//                     method: 'DELETE',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(userMovies)
//                 };
//                 fetch(url, options)
//                     .then(movies)
//                     .then(editMovies)
//                     .then(deleteMovies);
//             }
//         });
//     });
// });
//
// // deleteMovies();

