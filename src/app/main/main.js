import React from "react";
import Movies from "./movies/movies";
import Navbar from "./navbar/navbar";
import "./main.css";
import { Navigate, Route, Routes } from "react-router-dom";
import AvatarGen from "./avatarGen/avatarGen";

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="page__content">
                <Routes>
                    <Route path="/" exact element={<Navigate to="/movies" />} />
                    <Route path="*" exact element={<Navigate to="/movies" />} />
                    <Route path="/movies" exact={true} element={<Movies />} />
                    <Route
                        path="/avatar"
                        exact={true}
                        element={<AvatarGen />}
                    />
                </Routes>
            </div>
        </>
    );
};

export default Main;
