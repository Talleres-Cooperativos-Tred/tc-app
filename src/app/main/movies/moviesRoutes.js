import Movies from "./movies";

const moviesRoutes = [
    {
        path: "movies",
        exact: true,
        component: <Movies />,
    },
];

export default moviesRoutes;
