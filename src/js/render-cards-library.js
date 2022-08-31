import { async } from "@firebase/util";
import { createCardsLibrary } from "./createCardsLibrary";
import { onOpenFilmModal } from "./on-film-modal-open"

const gallery = document.querySelector('.library-main');
const queueBtn = document.querySelector('#queue-btn');
const watchedBtn = document.querySelector('#watched-btn');
const footer = document.querySelector('.footer')

let arrayFilms = [];



async function renderCardsFilms(key) {
    gallery.innerHTML = `<li class="no-movies-text">
            No movies added
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/072fa096-b852-4161-ae5d-8f42f037c051/d622kdq-7c587d45-6a2c-49db-bcb2-401a1907a378.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8wNzJmYTA5Ni1iODUyLTQxNjEtYWU1ZC04ZjQyZjAzN2MwNTEvZDYyMmtkcS03YzU4N2Q0NS02YTJjLTQ5ZGItYmNiMi00MDFhMTkwN2EzNzguZ2lmIn1dXX0.FyPXoHPJc7Zy1Tr2Giz96C3VKtu5mpzQMMVUd3uQw3k"
              alt=""
            />
          </li>`;
    footer.classList.add('footer--empty-library')
    const json = localStorage.getItem(key);
    arrayFilms = JSON.parse(json);
    if (arrayFilms === null) {
        return
    }

    gallery.innerHTML = ''
    footer.classList.remove('footer--empty-library')
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
        if (e.target.parentNode.localName === "div") {
            return
        }
        openFilm(e.target.parentNode.attributes[1].value)
    } else if (e.target.localName === "div") {
        return
    } else { 
        openFilm(e.target.parentElement.attributes[1].value)
    }
}

function openFilm(id) {
    const idFilm = arrayFilms?.find(film => film.id === Number(id));
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