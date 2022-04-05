import { combineReducers } from "redux";
import moviesReducer from "../app/main/movies/store/reducers/moviesReducer";
import loginReducer from "../app/login/store/reducers/loginReducer";

const rootReducer = combineReducers({
    movies: moviesReducer,
    login: loginReducer,
});

export default rootReducer;
