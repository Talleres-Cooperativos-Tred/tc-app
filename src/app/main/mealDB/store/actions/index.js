import { loadFood } from "../api";
import * as types from "./types";

export const loadRecipe = (text) => async dispatch => {
    const res = await loadFood(text);
    if (res.data.Response === "True") {
        dispatch({
            type: types.SEARCH_FOOD,
             payload: res.data.Search,
        });
      }
    // if (info === true){
    //     dispatch({
    //         type: types.LOAD_MOVIES_SUCCEED,
    //         payload: res.data.Search,
    //     });
    // }

      

   };