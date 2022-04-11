import avatarGenRoutes from "../main/avatarGen/avatarGenRoutes";
import mealDBRoutes from "../main/mealDB/mealDBRoutes";
import moviesRoutes from "../main/movies/moviesRoutes";
import rickMortyRoutes from "../main/rickMorty/rickMortyRoutes";

const routes = [];

const routesConfig = routes.concat(
    moviesRoutes,
    avatarGenRoutes,
    rickMortyRoutes,
    mealDBRoutes
);

export default routesConfig;
