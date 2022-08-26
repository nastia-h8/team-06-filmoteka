import { fetchPopularFilms } from './fetch-trending-films'
import { fetchGenres } from './fetch-genre-list'
const names = new Array();
 
async function getCardData() {
    // Получаем массив объектов с данными для 20 фильмов
    const movieData = await fetchPopularFilms();
    console.log(movieData)

    // Получаем массив объекотв всех жанров:
    const allGenres = await fetchGenres()
    console.log(allGenres)

    // Получаем массив из 20 массивв id жанров к фильму:
    const movieGenresIds = await movieData.map(data => data.genre_ids)
    console.log(movieGenresIds)

    function getNamesData(ids) {
        const nameArr = [];
        for (const id of ids) {
            for (const genre of allGenres) {
                
                if (genre.id === id) {
                    const data = genre.name;
                    nameArr.push(data)
                }
            }
        }
        return nameArr;
    }
    
    const genres = movieGenresIds.map(async ids => {
        const movieGenreNamsArr = await getNamesData(ids)
        names.push(movieGenreNamsArr)
    })

    console.log(await names) 
    return names
}
getCardData()