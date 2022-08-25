import { fetchPopularFilms } from './fetch-trending-films'
import { fetchGenres } from './fetch-genre-list'

async function getCardData() {
    // Получаем массив объектов с данными для 20 фильмов
    const movieData = await fetchPopularFilms();
    console.log(movieData)

    // Получаем массив объекотв всех жанров:
    const allGenres = await fetchGenres()
    console.log(allGenres)

    //Получаем массив из 20 массивв id жанров к фильму:
    const movieGenresIds = movieData.map(data => data.genre_ids)
    console.log(movieGenresIds)



}
getCardData()