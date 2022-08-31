import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { createCards } from './renderCardsFilms';
import { preLoader } from './loader-scroll';
import { preLoaderDel } from './loader-scroll';
import { query } from './submit-form';

export let currentPage = 1;



const gallery = document.querySelector('.gallery-films');

export async function pagePagination(totalResults, fetchFunction) {
    const options = {
        totalItems: 0,
        itemsPerPage: 20,
        visiblePages: 5,
        page: 1,
        centerAlign: true,
    };

    const pagination = new Pagination('#pagination', options);

    pagination.on('beforeMove', async evt => {
        currentPage = evt.page;
        gallery.innerHTML = '';
        preLoader()
        const newData = await fetchFunction(currentPage, query);
        // const totalResults = newData.total_results;
        const newList = await createCards(newData.results);

        gallery.insertAdjacentHTML('beforeend', newList);
        preLoaderDel();
        // console.log('newData', newData)
    });

    pagination.setTotalItems(await totalResults);
    pagination.reset();
}