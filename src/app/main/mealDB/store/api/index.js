import axios from "axios";

export const loadCategories = () => {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
};

export const loadRecipes = category => {
    return axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
};

export const loadRecipeInfo = id => {
    return axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
};
