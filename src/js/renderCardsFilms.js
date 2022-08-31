import { fetchPopularFilms } from './fetch-trending-films';
import { getCardGenreNames } from './get-genre-names-arr';
// import { createCardsLibrary } from './createCardsLibrary'
import { fechFilm } from './modal'
import { pagePagination, currentPage } from './pagination-general';
// import { pagePagination } from './pagination-for-home'
const gallery = document.querySelector('.home-main');
// let currentPage = 1;
let cardsFilmsGenres = ''



export async function renderCardsFilms(currentPage) {
    const cardsFilms = await fetchPopularFilms(currentPage);
    const totalResults = cardsFilms.total_results;
    const list = await createCards(cardsFilms.results);
    // const list = await createCardsLibrary(cardsFilms.results);

    await pagePagination(totalResults, fetchPopularFilms);
    
    gallery.insertAdjacentHTML('beforeend', list);

    gallery.addEventListener('click', takeFilm);

    
}

export async function createCards(cardsFilms) {
    if (!cardsFilmsGenres) {
        cardsFilmsGenres = await getCardGenreNames(cardsFilms)
    }
    
    let accFilms = cardsFilms.reduce((acc, item, index) => {
        let firstGenres = '';
        let genresArr = cardsFilmsGenres[index];
        const data = item.release_date.slice(0, 4);
        
        
        if (genresArr.length <= 3) {
            firstGenres = genresArr.slice(0, 3).join(", ");
        } if (genresArr.length > 3) {
            firstGenres = genresArr.slice(0, 3)
            firstGenres[2] = 'other';
            firstGenres = firstGenres.join(", ");
        }    
        
        const posterUrl = item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : 'https://screench.com/upload/no-poster.jpeg'
        return acc + `<li class="gallery-films__item">
                <a class="gallery-films__link" bata-id="${item.id}" href="">
                    <img class="gallery-films__card" src="${posterUrl}" alt="Картинка заглушка">
                    <h3 class="gallery-films__hero">${item.title}</h3>
                    <ul class="library-film">
                        <li class="library-film__item">${firstGenres}</li>
                        <li class="library-film__item">${data}</li>
                    </ul>
                </a>
            </li>
        `
    }, '');
    
    return accFilms
}
  
if (gallery === null) {
    return
}




export async function takeFilm(e) {
    e.preventDefault(e);
    if (e.target.localName === "li") {
        fechFilm(e.target.parentNode.parentElement.attributes[1].value);
    } else if (e.target.localName === "a") {
        fechFilm(e.target.attributes[1].value)
    } else if (e.target.localName === "ul") {
        if (e.target.parentNode.localName === "div") {
            return
        }
        fechFilm(e.target.parentNode.attributes[1].value)
    } else {
        fechFilm(e.target.parentElement.attributes[1].value)
    }
}

renderCardsFilms(currentPage);