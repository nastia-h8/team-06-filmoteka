import axios from "axios";

const API_KEY = "9c40587b7d16ffbdc73a57b7c7629b49";
const BASE_URL = "https://api.themoviedb.org/3" 

export async function fetchPopularFilms() { 
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data.results;
    }
    catch (error) {
    console.log(error);
    }
}

