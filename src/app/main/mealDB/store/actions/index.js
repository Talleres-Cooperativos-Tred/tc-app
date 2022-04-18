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
