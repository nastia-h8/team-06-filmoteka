import { fetchFilmsBySearch } from './fetch-films-by-search';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
    width: '280px',
    position: 'left-top',
    closeButton: false,
    useIcon: false,
});


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



async function createFilmsCollection(){
    const object = await fetchFilmsBySearch(query, page);
    console.log(object);

    if (object.length === 0) {
        alertNoFilmsFound();
    }
}





function alertEmptySearch() {
    Notiflix.Notify.failure('This field cannot be empty!');
}

function alertNoFilmsFound() {
    Notiflix.Notify.failure('No movies were found for this request, try something else.');
}