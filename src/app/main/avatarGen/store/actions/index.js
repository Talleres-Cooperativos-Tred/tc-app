import * as types from "./types";

export const setAvatarName = text => dispatch => {
    dispatch({
        type: types.CHANGE_AVATAR,
        payload: text,
    });
};
