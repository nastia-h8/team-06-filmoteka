import { async } from "@firebase/util";
import { createCardsLibrary } from "./createCardsLibrary";
import { onOpenFilmModal } from "./on-film-modal-open"

const gallery = document.querySelector('.library-film');
const queueBtn = document.querySelector('#queue-btn');
const watchedBtn = document.querySelector('#watched-btn');

let arrayFilms = [];



async function renderCardsFilms(key) {
    gallery.innerHTML = "";
    const json = localStorage.getItem(key);
    arrayFilms = JSON.parse(json);
    if (arrayFilms === null) {
        return
    }

    const list = await createCardsLibrary(arrayFilms);
    gallery.insertAdjacentHTML('beforeend', list);

    gallery.addEventListener('click', findId);
}
    
function findId(e) {
    e.preventDefault(e);
    // console.dir(e.target)
    if (e.target.localName === "p") {
        openFilm(e.target.parentNode.parentElement.parentNode.parentNode.attributes[1].value)
    } else if (e.target.localName === "div") {
        openFilm(e.target.parentNode.parentNode.parentElement.attributes[1].value)
    } else if (e.target.localName === "li") {
        openFilm(e.target.parentNode.parentElement.attributes[1].value)
    } else if (e.target.localName === "a") {
        openFilm(e.target.attributes[1].value)
    } else if (e.target.localName === "ul") {
        openFilm(e.target.parentNode.attributes[1].value)
    } else { 
        openFilm(e.target.parentElement.attributes[1].value)
    }
}

function openFilm(id) {
    const idFilm = arrayFilms?.find(film => film.id === Number(id));
    console.log(idFilm)
    onOpenFilmModal(idFilm)
}
// arrayFilms.forEach(function (element, index, array) {
    
//     console.log(element);
// });

if (gallery === null) {
    return
}
renderCardsFilms('watched')

queueBtn.addEventListener('click', () => {
    gallery.innerHTML = "";
    renderCardsFilms('queue')
});

watchedBtn.addEventListener('click', () => {
    gallery.innerHTML = "";
    renderCardsFilms('watched')
});