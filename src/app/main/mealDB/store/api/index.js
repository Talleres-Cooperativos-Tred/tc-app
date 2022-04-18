import axios from "axios";

export const loadFood = (text = "a") => {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`);
};
