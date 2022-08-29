import axios from "axios";
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { preloaderEd } from './loader-scroll'
const API_KEY = "9c40587b7d16ffbdc73a57b7c7629b49";
const BASE_URL = "https://api.themoviedb.org/3" 
// preLoader()
export async function fetchFilmsBySearch(query,page) { 
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    preloaderEd()
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data.results;
        
    }
    catch (error) {
    console.log(error);
    }
}