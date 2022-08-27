import { addCloseModalListeners } from './close-film-modal'

const filmBackdrop = document.querySelector('[data-modal]')

export async function makeFilmModalMarkup(markupInfo) {
    const { poster, title, vote, votes, popularity, originalTitle, genre, about } = markupInfo
    console.log(posterUrl)
    
    const filmInfo = document.querySelector('.film-info-container')
    const filmBackdrop = document.querySelector('[data-modal]')
    



    const markup = `<div class="img-wrap">
          <img src="${poster}" alt="${title}" />
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