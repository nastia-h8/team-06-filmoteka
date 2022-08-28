import { fetchPopularFilms } from './fetch-trending-films'
import { getCardGenreNames } from './get-genre-names-arr'
import { fechFilm } from './modal'

const gallery = document.querySelector('.gallery-films');


async function renderCardsFilms() {
    const cardsFilms = await fetchPopularFilms();

    const list = await createCards(cardsFilms);
    
    gallery.insertAdjacentHTML('beforeend', list);

    gallery.addEventListener('click', takeFilm);

    
}

export async function createCards(cardsFilms) {
    const cardsFilmsGenres = await getCardGenreNames(cardsFilms);
    
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
        
        const posterUrl = item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : '../images/no-poster.jpg'
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
    
renderCardsFilms()

async function takeFilm(e) {
    e.preventDefault(e);
    if (e.target.localName === "li") {
        fechFilm(e.target.parentNode.parentElement.attributes[1].value);
    } else {
        fechFilm(e.target.parentElement.attributes[1].value)
    }
}
    