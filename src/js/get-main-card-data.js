import { fetchPopularFilms } from './fetch-trending-films';
import {getMovieData} from './get-movie-by-id'

async function getCardData() {
    const dataArr = new Array();
    // Получаем массив id для 20 фильмов
    const movieIds = await fetchPopularFilms();
      
    // Для каждго id запрашиваем данные о фильме с сервера
    movieIds.map(async (id) => {
        const response = await getMovieData(id);
        dataArr.push(response);
    })
       
    console.log('MOVIE DATA:', dataArr)
    return dataArr;
}

getCardData()
