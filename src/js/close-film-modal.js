const closeFilmModalBtn = document.querySelector(".close-modal-btn")
const filmBackdrop = document.querySelector('[data-modal]')


export function addCloseModalListeners() {  
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
  filmBackdrop.classList.add('is-hidden')
  closeFilmModalBtn.removeEventListener('click', closeFilmModal)
  filmBackdrop.removeEventListener('click', onBackdropClick)
  window.removeEventListener('keydown', onEscDown)
}