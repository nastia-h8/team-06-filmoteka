// import {onWatchedClick, onQueueClick } from './localStorage'

const closeFilmModalBtn = document.querySelector(".close-modal-btn")
const filmBackdrop = document.querySelector('[data-modal]')


export async function addModalListeners() {  
  closeFilmModalBtn.addEventListener('click', closeFilmModal)
  filmBackdrop.addEventListener('click', onBackdropClick)
  window.addEventListener('keydown', onEscDown)
}

export function onBackdropClick(e) {
  if (e.target === filmBackdrop) {
    closeFilmModal()    
  }
}

export function onEscDown(e) {
  if (e.code === 'Escape') {
    closeFilmModal()    
  }
}

export function closeFilmModal() {
  const addToWatchedBtn = document.querySelector(".film-btn-wached")
  const addToQueuedBtn = document.querySelector(".film-btn-queue")

  filmBackdrop.classList.add('is-hidden')
  document.body.style.overflow = 'auto'
  closeFilmModalBtn.removeEventListener('click', closeFilmModal)
  filmBackdrop.removeEventListener('click', onBackdropClick)
  window.removeEventListener('keydown', onEscDown)
  addToWatchedBtn.removeEventListener('click', onWatchedClick)
  addToQueuedBtn.removeEventListener('click', onQueueClick)
}

