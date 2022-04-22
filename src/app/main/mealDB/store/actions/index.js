import * as api from "../api";
import * as types from "./types";

export const getCategories = () => async dispatch => {
    try {
        dispatch({
            type: types.LOAD_CATEGORIES_INIT,
        });

        const res = await api.loadCategories();

        if (res.status === 200) {
            dispatch({
                type: types.LOAD_CATEGORIES_SUCCEED,
                payload: res.data.categories,
            });
        } else {
            dispatch({
                type: types.LOAD_CATEGORIES_FAILED,
            });
        }
    } catch (error) {
        console.error(error.message);
        dispatch({
            type: types.LOAD_CATEGORIES_FAILED,
        });
    }
};

export const getRecipes = category => async dispatch => {
    try {
        dispatch({
            type: types.LOAD_RECIPES_INIT,
        });
        const res = await api.loadRecipes(category);
        if (res.status === 200) {
            dispatch({
                type: types.LOAD_RECIPES_SUCCEED,
                payload: res.data.meals,
            });
        } else {
            dispatch({
                type: types.LOAD_RECIPES_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.LOAD_RECIPES_FAILED,
        });
        console.error(error.message);
    }
};

export const getRecipeInfo = id => async dispatch => {
    try {
        dispatch({
            type: types.LOAD_RECIPE_INIT,
        });
        const res = await api.loadRecipeInfo(id);

        if (res.status === 200) {
            dispatch({
                type: types.LOAD_RECIPE_SUCCEED,
                payload: res.data.meals[0],
            });
        } else {
            dispatch({
                type: types.LOAD_RECIPE_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.LOAD_RECIPE_FAILED,
        });
    }
};
