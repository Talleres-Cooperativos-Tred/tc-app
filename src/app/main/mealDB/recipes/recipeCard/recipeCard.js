import React from "react";
import "./recipeCard.css";

const RecipeCard = ({ meal, navigate }) => {
    return (
        <div>
            <li key={meal.idMeal} onClick={() => navigate(meal.idMeal)}>
                <img width={200} src={meal.strMealThumb} alt={meal.strMeal} />
            </li>
        </div>
    );
};

export default RecipeCard;
