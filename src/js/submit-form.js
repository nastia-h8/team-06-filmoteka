import { fetchFilmsBySearch } from './fetch-films-by-search';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
    width: '300px',
    position: 'center-top',
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
        fetchFilmsBySearch(query, page);

    } catch (error) {
        Notiflix.Notify.failure("Ooops...Something goes wrong");
    }
}




function alertEmptySearch() {
    Notiflix.Notify.failure('This field cannot be empty!');
}