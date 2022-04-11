import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// https://www.themealdb.com/api.php

const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

const MealDB = () => {
    const [recipes, setRecipes] = useState([]);

    const navigate = useNavigate();

    const fetchRecipes = async () => {
        const res = await axios.get(url);
        setRecipes(res.data.meals);
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const openDetail = id => {
        navigate(`${id}`);
    };

    return (
        <div>
            <ul>
                {recipes.map(meal => {
                    return (
                        <li
                            key={meal.idMeal}
                            onClick={() => openDetail(meal.idMeal)}
                        >
                            {meal.strMeal} - {meal.strCategory}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MealDB;
