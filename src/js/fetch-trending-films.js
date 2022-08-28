import axios from "axios";

const API_KEY = "9c40587b7d16ffbdc73a57b7c7629b49";
const BASE_URL = "https://api.themoviedb.org/3" 

export async function fetchPopularFilms(page) { 
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data;
    }
    catch (error) {
    console.log(error);
    }
}

