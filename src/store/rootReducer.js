import { combineReducers } from "redux";
import moviesReducer from "../components/movies/store/reducers/moviesReducer";

const rootReducer = combineReducers({
    movies: moviesReducer,
});

export default rootReducer;
