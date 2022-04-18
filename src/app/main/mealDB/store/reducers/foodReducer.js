const initState = {
    data: [],
    info: false,
    dataInfo: false,
};

export default function foodReducer(state = initState, action) {
    switch (action.type) {
        case "SEARCH_FOOD":
            return {
                ...state,
                data: action.payload,
            };
        case "LOAD_FOOD_INFO":
            return {
                ...state,
                info: true,
                dataInfo: true,
                data: action.payload,
            };

        default:
            return state;
    }
}
