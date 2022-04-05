import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AvatarGen from "../avatarGen/avatarGen";
import Movies from "../movies/movies";
import Navbar from "./navbar/navbar";
import "./layout.css";

const Layout = () => {
    return (
        <main>
            <Navbar />
            <div className="fll"></div>
            <section className="page__content">
                <Routes>
                    <Route path="home" exact element={<h1>Welcome!</h1>} />
                    <Route path="movies" exact element={<Movies />} />
                    <Route path="avatar" exact element={<AvatarGen />} />
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
