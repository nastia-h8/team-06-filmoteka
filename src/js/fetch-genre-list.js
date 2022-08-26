import axios from "axios";

const API_KEY = "9c40587b7d16ffbdc73a57b7c7629b49";
const BASE_URL = "https://api.themoviedb.org/3" 

export async function fetchGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
        try {
        const response = await axios.get(url);
        const data = response.data;
        return data.genres;
    }
    catch (error) {
    console.log(error);
    }
}
