import * as types from "./types";

const users = [
    {
        userName: "Tred",
        password: "tredinstructor12",
    },
    {
        userName: "adrianDev",
        password: "adrianDevpass12",
    },
    {
        userName: "lu15",
        password: "lupass15",
    },
];

export const handleLogin = loginInfo => dispatch => {
    dispatch({
        type: types.LOGIN_INIT,
    });

    const success = users.find(element => {
        return (
            element.userName === loginInfo.userName &&
            element.password === loginInfo.password
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

export const addUser = newUser => dispatch => {
    // your code here:
    //made by Lu15

    const repeatedUser = users.find(user => {
        return user.userName === newUser.userName;
    });

    if (repeatedUser) {
        dispatch({
            type: types.SIGN_IN_FAILED,
            payload: "El usuario ya existe",
        });
    } else {
        users.push(newUser);
    }
};
