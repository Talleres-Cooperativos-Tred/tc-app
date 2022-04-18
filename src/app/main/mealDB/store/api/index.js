import axios from "axios";

export const loadCategories = () => {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
};
