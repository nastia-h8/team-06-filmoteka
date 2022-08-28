export async function createCardsLibrary(cardsFilms) {
    let accFilms = cardsFilms.reduce((acc, item, index) => {
        
        const posterUrl = item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : '../images/no-poster.jpg'
        return acc + `<li class="gallery-films__item">
                <a class="gallery-films__link" bata-id="${item.id}" href="">
                    <img class="gallery-films__card" src="${posterUrl}" alt="Картинка заглушка">
                    <h3 class="gallery-films__hero">${item.title}</h3>
                    <ul class="library-film">
                        <li class="library-film__item">Animation, Action, other</li>
                        <li class="library-film__item">2022</li>
                        <li class="post-film__item">
                            <div class="post-film__rating">
                                <p class="post-film__rating-description">7.9</p>
                            </div>
                        </li>
                    </ul>
                </a>
            </li>
        `
    }, '');
    
    return accFilms
}