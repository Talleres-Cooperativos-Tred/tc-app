import * as types from "./type";

export const changeAvatar = text => dispatch => {
    dispatch({
        type: types.CHANGE_AVATAR,
    });
};
