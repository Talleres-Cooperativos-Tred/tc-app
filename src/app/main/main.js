import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../login/login";
import Layout from "./layout/layout";

const Main = () => {
    const { logged } = useSelector(store => store.login);

    return (
        <>
            <Routes>
                <Route
                    path="/auth"
                    element={
                        logged === false ? (
                            <Login />
                        ) : (
                            <Navigate replace to="/tc" />
                        )
                    }
                />
                <Route
                    path="/tc/*"
                    element={
                        logged === false ? (
                            <Navigate replace to="/auth" />
                        ) : (
                            <Layout />
                        )
                    }
                />

                <Route
                    path="*"
                    element={<Navigate to={logged === false ? "auth" : "tc"} />}
                />
                <Route
                    path="/"
                    element={<Navigate to={logged === false ? "auth" : "tc"} />}
                />
            </Routes>
        </>
    );
};

export default Main;
