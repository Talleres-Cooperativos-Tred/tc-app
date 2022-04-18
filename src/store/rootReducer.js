import { combineReducers } from "redux";
import moviesReducer from "../app/main/movies/store/reducers/moviesReducer";
import loginReducer from "../app/login/store/reducers/loginReducer";
import avatarGenReducer from "../app/main/avatarGen/store/reducer/avatarGetReducer";
import mealDBReducer from "../app/main/mealDB/store/reducers/mealDBReducer";

const rootReducer = combineReducers({
    movies: moviesReducer,
    login: loginReducer,
    avatar: avatarGenReducer,
    meal: mealDBReducer,
});

export default rootReducer;
