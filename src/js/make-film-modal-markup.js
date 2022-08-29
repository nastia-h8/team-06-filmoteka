
export async function makeFilmModalMarkup(markupInfo) {
  const { poster, title, vote, votes, popularity, originalTitle, genre, about, year } = markupInfo
    
  const filmInfoJs = document.querySelector('.film-info-js')
  const filmPoster = document.querySelector('.img-wrap')
  const filmBackdrop = document.querySelector('[data-modal]')

  const posterMarkup = `<img src="${poster}" alt="${title}" />`
  const textMarcup = `<h2 class="film-title">${title}</h2>
          <table class="film-details">
            <tr>
              <td class="film-indicator">Vote / Votes</td>
              <td class="film-value">
                <span class="rating-value rating-value__accent">${vote}</span>
                <span class="rating-divider">/</span>
                <span class="rating-value">${votes}</span>
              </td>
            </tr>
            <tr>
              <td class="film-indicator">Popularity</td>
              <td class="film-value">${popularity}</td>
            </tr>
            <tr>
              <td class="film-indicator">Original Title</td>
              <td class="film-value film-value__upper">${originalTitle}</td>
            </tr>
            <tr>
              <td class="film-indicator">Genre</td>
              <td class="film-value">${genre}</td>
            </tr>
          </table>
          <h3 class="film-about">About</h3>
          <p class="film-text">${about}</p>`   
        
          
  filmBackdrop.classList.remove('is-hidden')
  filmPoster.innerHTML = posterMarkup
  filmInfoJs.innerHTML = textMarcup
  
}



