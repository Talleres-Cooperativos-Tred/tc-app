import MealDB from "./mealDB";
import Recipes from "./recipes/recipes";
import RecipeDetail from "./recipeDetail/recipeDetail";

const mealDBRoutes = [
    {
        path: "mealdb",
        exact: true,
        component: <MealDB />,
    },
    {
        path: "mealdb/:category",
        exact: true,
        component: <Recipes />,
    },
    {
        path: "mealdb/:category/:id",
        exact: true,
        component: <RecipeDetail />,
    },
];

export default mealDBRoutes;
