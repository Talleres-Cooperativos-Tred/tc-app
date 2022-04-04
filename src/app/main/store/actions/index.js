import { users } from "../api";
import * as types from "./types";

export const handleLogin = loginInfo => dispatch => {
    dispatch({
        type: types.LOGIN_INIT,
    });

    const success = users.find(element => {
        return (
            element.userName === loginInfo.user.userName &&
            element.password === loginInfo.user.password
        );
    });

    if (!success) {
        dispatch({
            type: types.LOGIN_FAILED,
        });
    } else {
        dispatch({
            type: types.LOGIN_SUCCEED,
        });
    }
};
