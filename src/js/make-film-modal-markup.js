import { addModalListeners } from './close-film-modal'

const filmBackdrop = document.querySelector('[data-modal]')

export async function onOpenFilmModal(markupInfo) {
  await makeFilmModalMarkup(markupInfo)
  addModalListeners()
  modalScrollForbiddance()


  // Робота з локал стореджем
  
  const LOCAL_STORAGE_WACHED = 'watched'
  const LOCAL_STORAGE_QUEUE = 'queue'
  const addToWatchedBtn = document.querySelector(".film-btn-wached")
  const addToQueuedBtn = document.querySelector(".film-btn-queue")
  addToWatchedBtn.addEventListener('click', onWatchedClick)
  addToQueuedBtn.addEventListener('click', onQueueClick) 

  function onWatchedClick() {
    const inLocalStorage = localStorage.getItem(LOCAL_STORAGE_WACHED)

    if (!inLocalStorage) {
      localStorage.setItem(LOCAL_STORAGE_WACHED, JSON.stringify([markupInfo]))
      addToWatchedBtn.removeEventListener('click', onWatchedClick)
    } else {
      const filmDataArr = JSON.parse(inLocalStorage)
      console.log(filmDataArr)
      filmDataArr.push(markupInfo)
      localStorage.setItem(LOCAL_STORAGE_WACHED, JSON.stringify(filmDataArr))
      addToWatchedBtn.removeEventListener('click', onWatchedClick)
    }
    
  }

  function onQueueClick() {
    const inLocalStorage = localStorage.getItem(LOCAL_STORAGE_QUEUE)

    if (!inLocalStorage) {
      localStorage.setItem(LOCAL_STORAGE_QUEUE, JSON.stringify([markupInfo]))
      addToWatchedBtn.removeEventListener('click', onQueueClick)
    } else {
      const filmDataArr = JSON.parse(inLocalStorage)
      console.log(filmDataArr)
      filmDataArr.push(markupInfo)
      localStorage.setItem(LOCAL_STORAGE_QUEUE, JSON.stringify(filmDataArr))
      addToWatchedBtn.removeEventListener('click', onQueueClick)
    }
  }
  
}

export async function makeFilmModalMarkup(markupInfo) {
  const { poster, title, vote, votes, popularity, originalTitle, genre, about, year } = markupInfo
    
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
  
  // addModalListeners()
  // modalScrollForbiddance()
  // getFilmDataForStorage(markupInfo)

}

function modalScrollForbiddance() {
  if (!filmBackdrop.classList.contains('is-hidden')) {
    document.body.style.overflow = 'hidden'
    filmBackdrop.style.overflow = 'auto'
  }
}

