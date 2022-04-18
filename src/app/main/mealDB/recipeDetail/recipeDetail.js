import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    const getMeal = async () => {
        const res = await axios.get(url);
        setRecipe(res.data.meals[0]);
    };

    useEffect(() => {
        getMeal();
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
