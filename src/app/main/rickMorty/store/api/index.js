import axios from "axios";

const url = "https://rickandmortyapi.com/api/character";

export const load = page => axios.get(`${url}/?page=${page}`);
