import axios from "axios"

export default async function fechFilm(id) {
    const MAIN_URL = 'https://api.themoviedb.org/3'
    const KEY = '9c40587b7d16ffbdc73a57b7c7629b49'

    const response = await axios.get(`${MAIN_URL}/movie/${id}?api_key=${KEY}`)
    const filmDetails = await response.data
    console.log(filmDetails)

    let genresArr = []
    filmDetails.genres.map(genre => genresArr.push(genre.name))
    const genres = genresArr.join(", ")


    // return {
    //     poster: filmDetails.backdrop_path,
    //     title: filmDetails.title,
    //     vote: filmDetails.vote_average,
    //     votes: filmDetails.vote_count,
    //     popularity: filmDetails.popularity,
    //     originalTitle: filmDetails.original_title,
    //     genre: genres,
    //     about: filmDetails.overview
    // }
    console.log(filmDetails.backdrop_path)

    const markupInfo = {
        poster: `https://image.tmdb.org/t/p/original${filmDetails.backdrop_path}`,
        title: filmDetails.title,
        vote: filmDetails.vote_average,
        votes: filmDetails.vote_count,
        popularity: filmDetails.popularity,
        originalTitle: filmDetails.original_title,
        genre: genres,
        about: filmDetails.overview
    }
    
    makeMarkup(markupInfo)
}

async function makeMarkup(markupInfo) {
    const { poster, title, vote, votes, popularity, originalTitle, genre, about } = markupInfo
    
    const filmInfo = document.querySelector('.film-info')
    
    const markup = ``

}


