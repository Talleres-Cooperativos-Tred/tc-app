import { lazy } from "react";

const rickMortyRoutes = [
    {
        path: "rickmorty",
        exact: true,
        component: lazy(() => import("./rickMorty")),
    },
];

export default rickMortyRoutes;
