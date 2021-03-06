import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/navbar";
import "./layout.css";
import routesConfig from "../../config/routesConfig";

const Layout = () => {
    return (
        <main>
            <Navbar />
            <div className="fll"></div>
            <section className="page__content">
                <Routes>
                    {routesConfig.map((route, i) => {
                        return (
                            <Route
                                key={i}
                                path={route.path}
                                exact={route.exact}
                                element={
                                    <Suspense fallback={<h3>Cargando...</h3>}>
                                        <route.component />
                                    </Suspense>
                                }
                            />
                        );
                    })}
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
