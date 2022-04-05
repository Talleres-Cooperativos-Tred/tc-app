import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "./store/actions";
import "./login.css";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({ userName: "", password: "" });
    const [signingIn, setSigningIn] = useState(false);

    const { logginError, logged } = useSelector(store => store.login);
    const handleChange = e => {
        const newUser = { ...user, [e.target.name]: e.target.value };
        setUser(newUser);
    };

    useEffect(() => {
        if (logged === true) {
            navigate("/");
        }
    }, [logged, navigate]);

    const handleSubmit = e => {
        e.preventDefault();

        if (signingIn === true) {
            //codigo para agregar usuario aca:
        } else {
            dispatch(handleLogin(user));
        }
    };

    return (
        <div className="login">
            <h2> {signingIn === false ? "Iniciar Sesion" : "Registrate"} </h2>
            {logginError === false ? (
                ""
            ) : (
                <span style={{ color: "red" }}>
                    El usuario o la contraseña son incorrectos
                </span>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    name="userName"
                    onChange={handleChange}
                    placeholder="Usuario"
                    type="text"
                />
                <input
                    name="password"
                    onChange={handleChange}
                    placeholder="Contraseña"
                    type="text"
                />
                <button type="submit">Ingresar</button>
            </form>
            {signingIn === false ? (
                <span onClick={() => setSigningIn(true)} className="register">
                    Registrarse
                </span>
            ) : (
                <span onClick={() => setSigningIn(false)} className="register">
                    Iniciar sesion
                </span>
            )}
        </div>
    );
};

export default Login;
