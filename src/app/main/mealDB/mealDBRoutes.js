import MealDB from "./mealDB";
import RecipeDetail from "./recipeDetail/recipeDetail";

const mealDBRoutes = [
    {
        path: "mealdb",
        exact: true,
        component: <MealDB />,
    },
    {
        path: "mealdb/:id",
        exact: true,
        component: <RecipeDetail />,
    },
];

export default mealDBRoutes;
