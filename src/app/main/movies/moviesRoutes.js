import { lazy } from "react";

const moviesRoutes = [
    {
        path: "movies",
        exact: true,
        component: lazy(() => import("./movies")),
    },
];

export default moviesRoutes;
