import axios from "axios"

export async function fechFilm(id) {
    const MAIN_URL = 'https://api.themoviedb.org/3'
    const KEY = '9c40587b7d16ffbdc73a57b7c7629b49'

    const response = await axios.get(`${MAIN_URL}/movie/${id}?api_key=${KEY}`)
    const filmDetails = await response.data
    console.log(filmDetails)

    let genresArr = []
    filmDetails.genres.map(genre => genresArr.push(genre.name))
    const genres = genresArr.join(", ")

    console.log(filmDetails.backdrop_path)

    const markupInfo = {
        poster: `https://image.tmdb.org/t/p/original${filmDetails.poster_path}`,
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

export async function makeMarkup(markupInfo) {
    const { poster, title, vote, votes, popularity, originalTitle, genre, about } = markupInfo
    
    const filmInfo = document.querySelector('.film-info-container')
    const filmBackdrop = document.querySelector('[data-modal]')

    const markup = `<div class="img-wrap">
          <img src="${poster || './images/no-poster-available.jpg'}" alt="${title}" />
        </div>
        <div class="film-info-wrap">
          <h2 class="film-title">${title}</h2>
          <table class="film-details">
            <tr>
              <td class="film-indicator">Vote / Votes</td>
              <td class="film-value">
                <span class="rating-value rating-value__accent">${vote}</span>
                <span class="rating-divider">/</span>
                <span class="rating-value">${votes}</span>
              </td>
            </tr>
            <tr>
              <td class="film-indicator">Popularity</td>
              <td class="film-value">${popularity}</td>
            </tr>
            <tr>
              <td class="film-indicator">Original Title</td>
              <td class="film-value film-value__upper">${originalTitle}</td>
            </tr>
            <tr>
              <td class="film-indicator">Genre</td>
              <td class="film-value">${genre}</td>
            </tr>
          </table>
          <h3 class="film-about">About</h3>
          <p class="film-text">${about}</p>
          <div class="film-btn-wrap">
            <button type="button" class="film-btn film-btn-wached">add to Watched</button>
            <button type="button" class="film-btn film-btn-queue">add to queue</button>
          </div>
        </div>`
    
    filmBackdrop.classList.remove('is-hidden')
    filmInfo.innerHTML = markup

}


fechFilm(762504)

