// function test() {
//     console.log('Test function')
// }

// test()

// import axios from "axios";
// // const submitBtn = document.querySelector('.submit-btn')

// // submitBtn.addEventListener('click', fetchPopularFilms)



// const API_KEY = "9c40587b7d16ffbdc73a57b7c7629b49";
// const BASE_URL = "https://api.themoviedb.org/3" 


// export async function fetchPopularFilms() {
//     const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
//     try {
//         const response = await axios.get(url);
//         const data = response.data;
//         const genreId = data.results[15].genre_ids;
//         // return data.results;
//         // console.log('films genres', data.results[0].genre_ids);

//  function getGenreName () {
//   let genre = [];

//   genreId.map(id => {
//     genre.push(newId);
//   });
//   console.log(genre);
//         };
        
//         getGenreName()
//     }
//     catch (error) {
//     console.log(error);
//     }
// }


// fetchPopularFilms()


// export async function fetchGenres() {
//     const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
//         try {
//         const response = await axios.get(url);
//             const data = response.data.genres;

//             const newData = data.map(({ id, name }) => {
//                 localStorage.setItem(id, name)
//                 const newId = id;
//                 const newGenreName = name;
//                 // console.log(name, id);
//             })
//             // let genreId = response.data.genres[0].id;

//         // return data.genres;
//             // console.log('all genres with name',data.genres[0])
//             // console.log(data)
//     }
//     catch (error) {
//     console.log(error);
//     }
// }

// fetchGenres()





// // /movie/{movie_id}


// // export async function getMoviesById(id) {
// //     try {

// //         const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
// //         const response = await axios.get(url);
// //         // return response;

// //         const posterUrl = `https://image.tmdb.org/t/p/original/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg`
// //         console.log(posterUrl);
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// // getMoviesById(12);

// // export async function getGenres() {
// //     try {
// //         const response = await axios.get(
// //             `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
// //         )
// //         console.log(response);
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }


// //     getGenres();