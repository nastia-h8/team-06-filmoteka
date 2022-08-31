import { fetchFilmsBySearch } from './fetch-films-by-search';
import { createCards } from './renderCardsFilms';
import { fechFilm } from './modal'
import Notiflix from 'notiflix'
import { preLoaderDel } from './loader-scroll'
import { preLoaderDel } from './loader-scroll'
import { pagePagination } from './pagination-general';


Notiflix.Notify.init({
    width: '280px',
    position:'center-top',
    closeButton: false,
    useIcon: false,
    fontFamily: 'Roboto',
    clickToClose: 'true',
    fontSize: '12px',
});

const gallery = document.querySelector('.gallery-films');
const searchForm = document.querySelector('#movie-search');

// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

export let query = '';
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

// Створення колекції
async function createFilmsCollection() {

    // gallery.removeEventListener('click', takeFilm)

    const filmObj = await fetchFilmsBySearch(page, query);
    const list = await createCards(filmObj.results);
    const totalResults = filmObj.total_results;
    let currentPage = filmObj.page;
    let currentQuery = query;

    // console.log('data', filmObj)

    if (filmObj.results.length === 0) {
        alertNoFilmsFound();
        preLoaderDel();
        return;
    }
    gallery.innerHTML = '';
    gallery.insertAdjacentHTML('beforeend', list);
    preLoaderDel();

    // async function takeFilmAfterSearch(e) {
    //     e.preventDefault(e);
    //     const id = Number(e.target.parentElement.attributes[1].value);
    //     console.log(e.target.parentElement.attributes[1].value)
    //     fechFilm(id);
    // }
    // gallery.addEventListener('click', takeFilmAfterSearch);
    

// ------------------------------------------- код для пагінації 
    pagePagination(totalResults, fetchFilmsBySearch);

    // const options = {
    //     totalItems: 0,
    //     itemsPerPage: 20,
    //     visiblePages: 5,
    //     page: 1,
    //     centerAlign: true,
    // };

    // const pagination = new Pagination('#pagination', options);

    // pagination.on('beforeMove', async evt => {
    //     currentPage = evt.page; 
    //     const newData = await fetchFilmsBySearch(currentQuery, currentPage);
    //         gallery.innerHTML = '';
    //         const newList = await createCards(newData.results);
    //     gallery.insertAdjacentHTML('beforeend', newList);
    //     preLoaderDel();
    //     console.log('newData', newData)
    // });

    // pagination.setTotalItems(totalResults);
    // pagination.reset();
    // ------------------------------------------- код для пагінації 
}


//Виклик повідомлень 
function alertEmptySearch() {
    Notiflix.Notify.failure('This field cannot be empty!');
}

function alertNoFilmsFound() {
    Notiflix.Notify.failure('Search result not successful, try something else.');
}
