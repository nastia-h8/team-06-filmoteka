import axios from "axios"
import {onOpenFilmModal} from "./make-film-modal-markup"


export async function fechFilm(id) {
    const MAIN_URL = 'https://api.themoviedb.org/3'
    const KEY = '9c40587b7d16ffbdc73a57b7c7629b49'

  try {
    const response = await axios.get(`${MAIN_URL}/movie/${id}?api_key=${KEY}`)


    if (response.status !== 200) {
      throw new Error
    }
    const filmDetails = await response.data

    console.log(filmDetails)

    let genresArr = []
    filmDetails.genres.map(genre => genresArr.push(genre.name))
    const genres = genresArr.join(", ")

    const posterUrl = filmDetails.poster_path ? `https://image.tmdb.org/t/p/original${filmDetails.poster_path}` : '../images/no-poster.jpg'
    

    const markupInfo = {
      poster: posterUrl,
      title: filmDetails.title,
      vote: filmDetails.vote_average,
      votes: filmDetails.vote_count,
      popularity: filmDetails.popularity,
      originalTitle: filmDetails.original_title,
      genre: genres,
      about: filmDetails.overview,
      year: Number.parseInt(filmDetails.release_date),
      id: filmDetails.id
    }

  
    onOpenFilmModal(markupInfo)
  }

   catch (error) {
    console.log(error)
  }    
}

// fechFilm(762504)
