import axios from "axios";

const API_KEY = "9c40587b7d16ffbdc73a57b7c7629b49";
const BASE_URL = "https://api.themoviedb.org/3" 

export async function getMovieData(id) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`

    try {
        const response = await axios.get(url);
        const data = await response.data;
        return data;
    }
    catch (error) {
    console.log(error);
    }
}
