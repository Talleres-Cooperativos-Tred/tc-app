import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, handleLogin } from "./store/actions";
import "./login.css";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({ userName: "", password: "" });
    const [signingIn, setSigningIn] = useState(false);

    const { logged, errorMessage } = useSelector(store => store.login);

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
            dispatch(addUser(user));
        } else {
            dispatch(handleLogin(user));
        }
    };
    return (
        <div className="login">
            <h2> {signingIn === false ? "Iniciar Sesion" : "Registrate"} </h2>
            {errorMessage.length === 0 ? (
                ""
            ) : (
                <span style={{ color: "red" }}>{errorMessage}</span>
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
                <button type="submit">
                    {signingIn === true ? "Iniciar sesion" : "Registrarse"}
                </button>
            </form>

            <span onClick={() => setSigningIn(!signingIn)} className="register">
                {signingIn === true ? "Iniciar sesion" : "Registrarse"}
            </span>
        </div>
    );
};

export default Login;
