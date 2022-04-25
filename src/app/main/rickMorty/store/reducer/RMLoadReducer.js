const initState = {
    data: [],
    loading: false,
    loaded: false,
    loadingError: false,
};

export default function RMReducer(state = initState, action) {
    switch (action.type) {
        case "RM_LOAD_INIT":
            return {
                ...state,
                loading: true,
                loaded: false,
                loadingError: false,
            };
        case "RM_LOAD_SUCCEED":
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload,
            };
        case "RM_LOAD_FAILED":
            return {
                ...state,
                loading: false,
                loaded: false,
                loadingError: true,
            };

        default:
            return state;
    }
}
