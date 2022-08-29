import { fetchGenres } from './fetch-genre-list'
const genreNames = new Array();
 
export async function getCardGenreNames(movieData) {

    // Получаем массив объекотв всех жанров:
    const allGenres = await fetchGenres()
    // console.log(allGenres)

    // Получаем массив из 20 массивв id жанров к фильму:
    const movieGenresIds = await movieData.map(data => data.genre_ids)
    // console.log(movieGenresIds)

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
    
    movieGenresIds.map(async ids => {
        const movieGenreNamsArr = getNamesData(ids)
        genreNames.push(movieGenreNamsArr)
    })
    // console.log(await genreNames)
    return genreNames
}

