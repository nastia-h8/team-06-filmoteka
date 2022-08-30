
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import { fetchPopularFilms } from './fetch-trending-films';
// import { createCards } from './renderCardsFilms';
// import { preLoader } from './loader-scroll';
// import { preLoaderDel } from './loader-scroll';

// const gallery = document.querySelector('.gallery-films');

// export function pagePagination(totalResults) {
//     const options = {
//         totalItems: 0,
//         itemsPerPage: 20,
//         visiblePages: 5,
//         page: 1,
//         centerAlign: true,
//     };

//     const pagination = new Pagination('#pagination', options);

//     pagination.on('beforeMove', async evt => {
//         currentPage = evt.page;
//         gallery.innerHTML = '';
//         preLoader()
//         const newData = await fetchPopularFilms(currentPage);
//         const totalPages = newData.total_pages;
//         const newList = await createCards(newData.results);

//         gallery.insertAdjacentHTML('beforeend', newList);
//         preLoaderDel();
//         console.log('newData', newData)
//     });

//     pagination.setTotalItems(totalResults);
//     pagination.reset();
// }
