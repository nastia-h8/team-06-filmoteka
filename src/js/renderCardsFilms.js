import { fetchPopularFilms } from './fetch-trending-films'
import { getCardGenreNames } from './get-genre-names-arr'

const gallery = document.querySelector('.gallery-films');


async function renderCardsFilms() {
    const cardsFilms = await fetchPopularFilms();
    console.log(cardsFilms);

    const list = await createCards(cardsFilms);
    
    gallery.insertAdjacentHTML('beforeend', list);
}

async function createCards(cardsFilms) {
    const cardsFilmsGenres = await getCardGenreNames(cardsFilms);
    console.log(cardsFilmsGenres);
    
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
        let image = '';
        console.dir(item)
        if (item.backdrop_path === null) {
            image = '../images/no-poster-available.jpg';
        }
        image = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;
        console.log(image)
        console.dir(item)
        return acc + `<li class="gallery-films__item">
                <a class="gallery-films__link" href="">
                    <img class="gallery-films__card" src="${image}" alt="Картинка заглушка">
                    <h3 class="gallery-films__hero">${item.title}</h3>
                    <ul class="library-film">
                        <li class="library-film__item">
                            <p class="library-film__description">${firstGenres}</p>
                        </li>
                        <li class="library-film__item">
                            <p class="library-film__description">${data}</p>
                        </li>
                    </ul>
                </a>
            </li>
        `
    }, '');
    
    return accFilms
}
    
renderCardsFilms()

function takeFilm(e) {
    e.preventDefault(e);
    console.dir(e);
}

    gallery.addEventListener('click', takeFilm);