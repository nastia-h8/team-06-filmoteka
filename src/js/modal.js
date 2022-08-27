import axios from "axios"
const filmBackdrop = document.querySelector('[data-modal]')
const closeFilmModalBtn = document.querySelector(".close-modal-btn")


export async function fechFilm(id) {
    const MAIN_URL = 'https://api.themoviedb.org/3'
    const KEY = '9c40587b7d16ffbdc73a57b7c7629b49'

    const response = await axios.get(`${MAIN_URL}/movie/${id}?api_key=${KEY}`)
    const filmDetails = await response.data

    let genresArr = []
    filmDetails.genres.map(genre => genresArr.push(genre.name))
    const genres = genresArr.join(", ")

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
    
    makeFilmModalMarkup(markupInfo)
}

export async function makeFilmModalMarkup(markupInfo) {
    const { poster, title, vote, votes, popularity, originalTitle, genre, about } = markupInfo
    
    const filmInfo = document.querySelector('.film-info-container')

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
  
  addCloseModalListeners()
  modalScrollForbiddance()

}


function modalScrollForbiddance() {
  if (!filmBackdrop.classList.contains('is-hidden')) {
    document.body.style.overflow = 'hidden'
    filmBackdrop.style.overflow = 'scroll'
  }
}


function addCloseModalListeners() {  
  closeFilmModalBtn.addEventListener('click', closeFilmModal)
  filmBackdrop.addEventListener('click', onBackdropClick)
  window.addEventListener('keydown', onEscDown)
}

function onBackdropClick(e) {
  if (e.target === filmBackdrop) {
    closeFilmModal()    
  }
}

function onEscDown(e) {
  if (e.code === 'Escape') {
    closeFilmModal()    
  }
}

function closeFilmModal() {
  filmBackdrop.classList.add('is-hidden')
  closeFilmModalBtn.removeEventListener('click', closeFilmModal)
  filmBackdrop.removeEventListener('click', onBackdropClick)
  window.removeEventListener('keydown', onEscDown)
}

fechFilm(762504)

