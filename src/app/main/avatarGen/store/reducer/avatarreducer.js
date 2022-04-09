const initState = {
    aveurl: "https://api.multiavatar.com/abc.png",
};

export default function avatarReducer(state = initState, action) {
    switch (action.type) {
        case "CHANGE_AVATAR":
            return{
                ...state,
                aveurl: action.payload,
            };

        default:
            return state;
    }
}
