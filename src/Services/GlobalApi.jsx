import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_Key = "5c3d893f2c1ef741a20efeb6df380094"

const getTrendingMovies = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_Key);

export default {getTrendingMovies}