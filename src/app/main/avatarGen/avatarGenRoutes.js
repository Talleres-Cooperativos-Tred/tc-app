import { lazy } from "react";

const avatarGenRoutes = [
    {
        path: "avatar",
        exact: true,
        component: lazy(() => import("./avatarGen")),
    },
];

export default avatarGenRoutes;
