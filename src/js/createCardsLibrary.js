
export async function createCardsLibrary(cardsFilms) {
    let accFilms = cardsFilms.reduce((acc, item) => {
        const genresArr = item.genre.split(", ");
        let firstGenres = '';

        if (genresArr.length <= 3) {
            firstGenres = genresArr.slice(0, 3).join(", ");
        } if (genresArr.length > 3) {
            firstGenres = genresArr.slice(0, 3)
            firstGenres[2] = 'other';
            firstGenres = firstGenres.join(", ");
        }
        const posterUrl = item.poster ? item.poster : 'https://screench.com/upload/no-poster.jpeg'
        return acc + `<li class="gallery-films__item">
                <a class="gallery-films__link" bata-film="${item.id}" href="">
                    <img class="gallery-films__card" src="${posterUrl}" alt="Картинка заглушка">
                    <h3 class="gallery-films__hero">${item.title}</h3>
                    <ul class="library-film">
                        <li class="library-film__item">${firstGenres}</li>
                        <li class="library-film__item">${item.year}</li>
                        <li class="post-film__item">
                            <div class="post-film__rating">
                                <p class="post-film__rating-description">${item.vote}</p>
                            </div>
                        </li>
                    </ul>
                </a>
            </li>
        `
    }, '');
    
    return accFilms
}