import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AvatarGen from "../avatarGen/avatarGen";
import Movies from "../movies/movies";
import Navbar from "./navbar/navbar";
import "./layout.css";
import RickMorty from "../R&M/rickMorty";
import routesConfig from "../../config/routesConfig";

const Layout = () => {
    return (
        <main>
            <Navbar />
            <div className="fll"></div>
            <section className="page__content">
                <Routes>
                    {routesConfig.map(componentRoutes => {
                        return componentRoutes.map((route, i) => {
                            return (
                                <Route
                                    key={i}
                                    path={route.path}
                                    exact={route.exact}
                                    element={route.component}
                                />
                            );
                        });
                    })}

                    <Route path="avatar" exact element={<AvatarGen />} />
                    <Route path="rickmorty" exact element={<RickMorty />} />
                    <Route path="home" exact element={<h1>Welcome!</h1>} />
                    <Route
                        path=""
                        exact
                        element={<Navigate replace to="home" />}
                    />
                    <Route
                        path="*"
                        exact
                        element={<Navigate replace to="home" />}
                    />
                </Routes>
            </section>
        </main>
    );
};

export default Layout;
