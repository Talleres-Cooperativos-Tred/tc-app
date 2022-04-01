import axios from "axios";

const url = "http://www.omdbapi.com";
const key = "a86f58b5";

export const load = (text = "alien") => {
    return axios.get(`${url}/?apikey=${key}&s=${text}`);
};
