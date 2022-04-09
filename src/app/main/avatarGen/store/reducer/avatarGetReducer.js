const initState = {
    avatarUrl: "",
};

export default function avatarGenReducer(state = initState, action) {
    switch (action.type) {
        case "CHANGE_AVATAR":
            return {
                ...state,
                avatarUrl: action.payload,
            };

        default:
            return state;
    }
}
