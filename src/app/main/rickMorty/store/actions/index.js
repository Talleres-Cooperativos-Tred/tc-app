import * as types from "./types";
import * as api from "../api";

export const loadRM = page => async dispatch => {
    try {
        dispatch({
            type: types.RM_LOAD_INIT,
        });

        const res = await api.load(page);
        if (res.status === 200) {
            dispatch({
                type: types.RM_LOAD_SUCCEED,
                payload: res.data.results,
            });
        } else {
            dispatch({
                type: types.RM_LOAD_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.RM_LOAD_FAILED,
        });
    }
};
