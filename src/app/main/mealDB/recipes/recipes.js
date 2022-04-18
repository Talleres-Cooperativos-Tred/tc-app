import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Recipes = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            const res = await axios.get(
                "https://www.themealdb.com/api/json/v1/1/filter.php?c=" +
                    category
            );
            setRecipes(res.data.meals);
        };

        getRecipes();
    }, [category]);

    return (
        <div>
            <ol>
                {recipes.map(meal => {
                    return (
                        <li
                            key={meal.idMeal}
                            onClick={() => navigate(meal.idMeal)}
                        >
                            <img
                                width={200}
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                            />
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Recipes;
