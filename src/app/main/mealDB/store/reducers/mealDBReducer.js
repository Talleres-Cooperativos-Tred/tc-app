const initState = {
    categories: [],
    recipes: [],
    recipe: null,
    loading: false,
    loaded: false,
    loadingError: false,
};

export default function mealDBReducer(state = initState, action) {
    switch (action.type) {
        case "LOAD_CATEGORIES_INIT":
            return {
                ...state,
                loading: true,
                loaded: false,
                loadingError: false,
            };
        case "LOAD_CATEGORIES_SUCCEED":
            return {
                ...state,
                loading: false,
                loaded: true,
                categories: action.payload,
            };
        case "LOAD_CATEGORIES_FAILED":
            return {
                ...state,
                loading: false,
                loadingError: true,
            };

        default:
            return state;
    }
}
