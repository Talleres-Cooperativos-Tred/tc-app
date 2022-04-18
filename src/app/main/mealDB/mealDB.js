import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipe } from "./store/actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MealDB = () => {
    const dispatch = useDispatch();
    const foodStore = useSelector(store => store.food);
    console.log(foodStore);

    dispatch(loadRecipe())

    const handleKeyUp = e => {
        const searchText = e.target.value;
        dispatch(loadRecipe(searchText))
    };

    return (
        <div>
            <h2>Recipe</h2>
            <div>
                <input type="text" onKeyUp={e => handleKeyUp(e)} />
                <button type="submit"/>
            </div>
            <div>
                {foodStore.data.meals[0].map((food) => {
                    return(
                        <div>
                        <img
                width={320}
                height={500}
                src={food[0].strMealThumb}
                alt={food[0].strMeal}
            />
            <h3> {food.strMeal} </h3>
            </div>
                    )
                })}
            </div>
        </div>
    )
};

export default MealDB;
