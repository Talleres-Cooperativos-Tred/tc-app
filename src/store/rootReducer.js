import { combineReducers } from "redux";
import moviesReducer from "../app/main/movies/store/reducers/moviesReducer";
import loginReducer from "../app/login/store/reducers/loginReducer";
import avatarGenReducer from "../app/main/avatarGen/store/reducer/avatarGetReducer";
import mealDBReducer from "../app/main/mealDB/store/reducers/mealDBReducer";
import RMReducer from "../app/main/rickMorty/store/reducer/RMLoadReducer";

const rootReducer = combineReducers({
    movies: moviesReducer,
    login: loginReducer,
    avatar: avatarGenReducer,
    meal: mealDBReducer,
    RM: RMReducer,
});

export default rootReducer;
