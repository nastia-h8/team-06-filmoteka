import { makeFilmModalMarkup } from './make-film-modal-markup'

const filmBackdrop = document.querySelector('[data-modal]')
const closeFilmModalBtn = document.querySelector(".close-modal-btn")
const addToWatchedBtn = document.querySelector(".film-btn-wached")
const addToQueuedBtn = document.querySelector(".film-btn-queue")


export async function onOpenFilmModal(markupInfo) {
    await makeFilmModalMarkup(markupInfo)
    addModalListeners()
    modalScrollForbiddance()

    
    function addModalListeners() {  
        closeFilmModalBtn.addEventListener('click', closeFilmModal)
        filmBackdrop.addEventListener('click', onBackdropClick)
        window.addEventListener('keydown', onEscDown)
        addToWatchedBtn.addEventListener('click', onWatchedClick)
        addToQueuedBtn.addEventListener('click', onQueueClick)     
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
        document.body.style.overflow = 'auto'
        closeFilmModalBtn.removeEventListener('click', closeFilmModal)
        filmBackdrop.removeEventListener('click', onBackdropClick)
        window.removeEventListener('keydown', onEscDown)
        addToWatchedBtn.removeEventListener('click', onWatchedClick)
        addToQueuedBtn.removeEventListener('click', onQueueClick)  
    }


 // =============== робота з local ctorage ===============

    const KEY_WACHED = 'watched'
    const KEY_QUEUE = 'queue'

    function onWatchedClick() {
        const inLocalStorage = localStorage.getItem(KEY_WACHED)

        if (!inLocalStorage) {
        localStorage.setItem(KEY_WACHED, JSON.stringify([markupInfo]))
        addToWatchedBtn.removeEventListener('click', onWatchedClick)
        } else {
            const filmDataArr = JSON.parse(inLocalStorage)
            console.log(filmDataArr)
            filmDataArr.push(markupInfo)
            localStorage.setItem(KEY_WACHED, JSON.stringify(filmDataArr))
            addToWatchedBtn.removeEventListener('click', onWatchedClick)
        }
        
    }

    function onQueueClick() {
        const inLocalStorage = localStorage.getItem(KEY_QUEUE)

        if (!inLocalStorage) {
        localStorage.setItem(KEY_QUEUE, JSON.stringify([markupInfo]))
        addToWatchedBtn.removeEventListener('click', onQueueClick)
        } else {
            const filmDataArr = JSON.parse(inLocalStorage)
            console.log(filmDataArr)
            filmDataArr.push(markupInfo)
            localStorage.setItem(KEY_QUEUE, JSON.stringify(filmDataArr))
            addToWatchedBtn.removeEventListener('click', onQueueClick)
            }
    }
}

function modalScrollForbiddance() {
  if (!filmBackdrop.classList.contains('is-hidden')) {
    document.body.style.overflow = 'hidden'
    filmBackdrop.style.overflow = 'auto'
  }
}


