import { combineReducers } from "redux";
import moviesReducer from "../app/main/movies/store/reducers/moviesReducer";
import loginReducer from "../app/login/store/reducers/loginReducer";
import avatarGenReducer from "../app/main/avatarGen/store/reducer/avatarGetReducer";

const rootReducer = combineReducers({
    movies: moviesReducer,
    login: loginReducer,
    avatar: avatarGenReducer,
});

export default rootReducer;
