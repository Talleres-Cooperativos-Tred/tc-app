const initState = {
    avatarName: "tomy",
    fullUrl: "",
};

export default function avatarGenReducer(state = initState, action) {
    switch (action.type) {
        case "CHANGE_AVATAR":
            return {
                ...state,
                avatarName: action.payload,
            };

        default:
            return state;
    }
}
