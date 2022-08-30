import axios from "axios";
import { preLoader, preLoaderDel } from './loader-scroll'

const API_KEY = "9c40587b7d16ffbdc73a57b7c7629b49";
const BASE_URL = "https://api.themoviedb.org/3" 

export async function fetchFilmsBySearch(page, query) { 
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    
    try {
        preLoader();
        const response = await axios.get(url);
        const data = response.data;
        return data;
        
    }
    catch (error) {
    console.log(error);
    }
}


