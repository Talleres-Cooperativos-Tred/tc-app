const initState = {
    data: [],
    loading: false,
    loaded: false,
    loadingError: false,
};

export default function moviesReducer(state = initState, action) {
    switch (action.type) {
        case "LOAD_MOVIES_INIT":
            return {
                ...state,
                loading: true,
            };
        case "LOAD_MOVIES_SUCCEED":
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload,
            };
        case "LOAD_MOVIES_FAILED":
            return {
                ...state,
                loading: false,
                loadingError: true,
            };

        default:
            return state;
    }
}
