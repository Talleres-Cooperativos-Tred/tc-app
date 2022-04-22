import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeInfo } from "../store/actions";

const RecipeDetail = () => {
    const { id } = useParams();
    const { recipe } = useSelector(store => store.meal);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipeInfo(id));
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {recipe === null ? (
                ""
            ) : (
                <div>
                    <h3>{recipe.strMeal}</h3>
                    <img
                        width={200}
                        src={recipe.strMealThumb}
                        alt={recipe.strMeal}
                    />
                    <p> {recipe.strInstructions} </p>
                </div>
            )}
        </div>
    );
};

export default RecipeDetail;
