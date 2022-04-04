import { combineReducers } from "redux";
import moviesReducer from "../app/main/movies/store/reducers/moviesReducer";
import mainReducer from "../app/main/store/reducers/mainReducer";

const rootReducer = combineReducers({
    movies: moviesReducer,
    login: mainReducer,
});

export default rootReducer;
