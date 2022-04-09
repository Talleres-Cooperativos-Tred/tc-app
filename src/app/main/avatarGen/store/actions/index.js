import * as types from "./types";

export const setAvatar = url => dispatch => {
    dispatch({
        type: types.CHANGE_AVATAR,
        payload: url,
    });
};
