const initState = {
    logged: false,
    logging: false,
    logginError: false,
    errorMessage: "",
};

const mainReducer = function (state = initState, action) {
    switch (action.type) {
        case "LOGIN_INIT":
            return {
                ...state,
                logging: true,
                logginError: false,
                errorMessage: "",
            };
        case "LOGIN_SUCCEED":
            return {
                ...state,
                logging: false,
                logged: true,
            };
        case "LOGIN_FAILED":
            return {
                ...state,
                logging: false,
                logginError: true,
                errorMessage: "Error: Usuario o contraseña incorrectos",
            };
        default:
            return state;
    }
};

export default mainReducer;
