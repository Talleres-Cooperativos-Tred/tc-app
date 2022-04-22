import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipes } from "../store/actions";
import RecipeCard from "./recipeCard/recipeCard";

const Recipes = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const { recipes, loading } = useSelector(store => store.meal);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes(category));
    }, [category, dispatch]);

    if (loading === true) {
        return <h1> Cargando... </h1>;
    }

    return (
        <div>
            <ol>
                {recipes.map(meal => {
                    return <RecipeCard meal={meal} navigate={navigate} />;
                })}
            </ol>
        </div>
    );
};

export default Recipes;
