import { async } from "@firebase/util";
import { createCardsLibrary } from "./createCardsLibrary";

async function renderCardsFilms() {
    const json = await localStorage.getItem('watched');
const arrayFilms = JSON.parse(json);
console.log(arrayFilms);

const list = await createCardsLibrary(arrayFilms);
    console.log(list)
}
    

// arrayFilms.forEach(function (element, index, array) {
    
//     console.log(element);
// });

renderCardsFilms()