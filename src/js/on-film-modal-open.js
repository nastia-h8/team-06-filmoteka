import { makeFilmModalMarkup } from './make-film-modal-markup'
import { closeOpenbtn } from './loader-scroll'
import { delBtn } from './loader-scroll'

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
        closeOpenbtn();
        filmBackdrop.classList.add('is-hidden')
        document.body.style.overflow = 'auto'
        closeFilmModalBtn.removeEventListener('click', closeFilmModal)
        filmBackdrop.removeEventListener('click', onBackdropClick)
        window.removeEventListener('keydown', onEscDown)
        addToWatchedBtn.removeEventListener('click', onWatchedClick)
        addToQueuedBtn.removeEventListener('click', onQueueClick)
        enableAddToWatchedBtn()
        enableAddToQueuedBtn()
    }


 // =============== робота з local ctorage ===============

    const KEY_WACHED = 'watched'
    const KEY_QUEUE = 'queue'

    const inWachedLocalStorage = localStorage.getItem(KEY_WACHED)
    const wachedFilmsArr = JSON.parse(inWachedLocalStorage)
    const isAlredyOnWached = wachedFilmsArr?.find(film => film.id === markupInfo.id)
    
    const inQueueLocalStorage = localStorage.getItem(KEY_QUEUE)
    const queueFilmsArr = JSON.parse(inQueueLocalStorage)
    const isAlredyOnQueue = queueFilmsArr?.find(film => film.id === markupInfo.id)

    if (isAlredyOnWached) {
       disableAddToWatchedBtn()
    }

    if (isAlredyOnQueue) {
        disableAddToQueuedBtn()
    }


    function onWatchedClick() { 
        try {
            const inWachedLocalStorage = localStorage.getItem(KEY_WACHED)
            const wachedFilmsArr = JSON.parse(inWachedLocalStorage)
            
            if (!inWachedLocalStorage) {
                localStorage.setItem(KEY_WACHED, JSON.stringify([markupInfo]))
                disableAddToWatchedBtn()
                removeFilmFromQueue()
            } else {
                wachedFilmsArr.push(markupInfo)
                localStorage.setItem(KEY_WACHED, JSON.stringify(wachedFilmsArr))
                disableAddToWatchedBtn()
                removeFilmFromQueue()
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    function onQueueClick() {          
        try {
            const inQueueLocalStorage = localStorage.getItem(KEY_QUEUE)
            const queueFilmsArr = JSON.parse(inQueueLocalStorage)

            if (!inQueueLocalStorage) {
                localStorage.setItem(KEY_QUEUE, JSON.stringify([markupInfo]))
                disableAddToQueuedBtn()
                removeFilmFromWached()
            } else {
                queueFilmsArr.push(markupInfo)
                localStorage.setItem(KEY_QUEUE, JSON.stringify(queueFilmsArr))
                disableAddToQueuedBtn()
                removeFilmFromWached()
            }
        } catch (error) {
            console.log(error)
        }
    }

    function removeFilmFromWached() {
        try {
            const inWachedLocalStorage = localStorage.getItem(KEY_WACHED)
            const wachedFilmsArr = JSON.parse(inWachedLocalStorage)
            const isAlredyOnWached = wachedFilmsArr?.find(film => film.id === markupInfo.id)

            if (isAlredyOnWached) {
                const newWachedFilmsArr = wachedFilmsArr.filter(film => film.id !== markupInfo.id)

                if (newWachedFilmsArr.length > 0) {
                    localStorage.setItem(KEY_WACHED, JSON.stringify(newWachedFilmsArr))
                } else {
                    localStorage.removeItem(KEY_WACHED)
                }  

                enableAddToWatchedBtn()            
            }        
        } catch (error) {
            console.log(error)
        }
    }

    function removeFilmFromQueue() {
        try {
            const inQueueLocalStorage = localStorage.getItem(KEY_QUEUE)
            const queueFilmsArr = JSON.parse(inQueueLocalStorage)
            const isAlredyOnQueue = queueFilmsArr?.find(film => film.id === markupInfo.id)

            if (isAlredyOnQueue) {
                const newQueueFilmsArr = queueFilmsArr.filter(film => film.id !== markupInfo.id)

                if (newQueueFilmsArr.length > 0) {
                    localStorage.setItem(KEY_QUEUE, JSON.stringify(newQueueFilmsArr))
                } else {
                    localStorage.removeItem(KEY_QUEUE)
                }  

                enableAddToQueuedBtn()           
            }     
        } catch (error) {
            console.log(error)
        }
    }
}

function disableAddToWatchedBtn() {
    addToWatchedBtn.setAttribute('disabled', true)
    addToWatchedBtn.innerHTML = 'movie alredy in wached'
}

function enableAddToWatchedBtn() {
    addToWatchedBtn.removeAttribute('disabled')
    addToWatchedBtn.innerHTML = 'add to watched'
}

function disableAddToQueuedBtn() {
    addToQueuedBtn.setAttribute('disabled', true)
    addToQueuedBtn.innerHTML = 'movie alredy in queue'
}

function enableAddToQueuedBtn() {
    addToQueuedBtn.removeAttribute('disabled')
    addToQueuedBtn.innerHTML = 'add to queue'
}


function modalScrollForbiddance() {
    if (!filmBackdrop.classList.contains('is-hidden')) {
        delBtn();
    document.body.style.overflow = 'hidden'
    filmBackdrop.style.overflow = 'auto'
    }
}


