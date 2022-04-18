import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./store/actions";
import { useNavigate } from "react-router-dom";
import "./mealDB.css";

const MealDB = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categories } = useSelector(store => store.meal);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div>
            <h2>Recipe</h2>
            <div>
                <input type="text" />
                <button type="submit" />
            </div>
            <div className="categories__container">
                {categories.map((category, i) => {
                    console.log(category.strMealThumb);
                    return (
                        <p
                            key={i}
                            onClick={() => navigate(category.strCategory)}
                        >
                            <img
                                src={category.strCategoryThumb}
                                width={200}
                                alt={category.strCategory}
                            />
                            {category.strCategory}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default MealDB;
