import { fetchFilmsBySearch } from './fetch-films-by-search';
import { createCards } from './renderCardsFilms';
import { fechFilm } from './modal'


import Notiflix from 'notiflix';
Notiflix.Notify.init({
    width: '280px',
    position:'top-center',
    closeButton: false,
    useIcon: false,
});

const gallery = document.querySelector('.gallery-films');
const searchForm = document.querySelector('#movie-search');

let query = '';
let page = 1;

if (searchForm){
    searchForm.addEventListener('submit', onSearchMovieForm);
}

async function onSearchMovieForm(e) {
    e.preventDefault();
    query = e.currentTarget.query.value.trim();
    page = 1;
    gallery.innerHTML = '';

        if (query === '') {
        alertEmptySearch();
        return;
    }
    try {
        createFilmsCollection();

    } catch (error) {
        Notiflix.Notify.failure("Ooops...Something goes wrong");
    }
}

// Створення 
async function createFilmsCollection(){
    const filmObj = await fetchFilmsBySearch(query, page);
    const list = await createCards(filmObj);
    console.log('films', filmObj)

    if (filmObj.length === 0) {
        alertNoFilmsFound();
    }

    gallery.insertAdjacentHTML('beforeend', list);

    async function takeFilm(e) {
    e.preventDefault(e);
        const id = Number(e.target.parentElement.attributes[1].value);
        fechFilm(id);
    }
    gallery.addEventListener('click', takeFilm);
    page += 1;
}



//Виклик повідомлень 
function alertEmptySearch() {
    Notiflix.Notify.failure('This field cannot be empty!');
}

function alertNoFilmsFound() {
    Notiflix.Notify.failure('No movies were found for this request, try something else.');
}