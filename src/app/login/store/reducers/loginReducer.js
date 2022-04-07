const initState = {
    logged: true,
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
        case "SIGN_IN_FAILED":
            return {
                ...state,
                errorMessage: action.payload,
                logginError: true,
            };

        default:
            return state;
    }
};

export default mainReducer;
