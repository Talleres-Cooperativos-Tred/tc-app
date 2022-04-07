import { load } from "../api";
import * as types from "./types";

export const loadMovies = text => async dispatch => {
    try {
        dispatch({
            type: types.LOAD_MOVIES_INIT,
        });

        const res = await load(text);
        if (res.data.Response === "True") {
            dispatch({
                type: types.LOAD_MOVIES_SUCCEED,
                payload: res.data.Search,
            });
        } else {
            dispatch({
                type: types.LOAD_MOVIES_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.LOAD_MOVIES_FAILED,
        });
    }
};
