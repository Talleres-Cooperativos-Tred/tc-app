import React from "react";
import "./login.css";

const Login = ({
    setUser,
    user,
    handleLogin,
    loginError,
    instance,
    setInstance,
}) => {
    const handleChange = e => {
        const newUser = { ...user, [e.target.name]: e.target.value };
        setUser(newUser);
    };

    return (
        <div className="login">
            <h2> {instance === "login" ? "Iniciar Sesion" : "Registrate"} </h2>
            {loginError === false ? (
                ""
            ) : (
                <span style={{ color: "red" }}>
                    El usuario o la contraseña son incorrectos
                </span>
            )}
            <form onSubmit={handleLogin}>
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
            {instance === "login" ? (
                <span
                    onClick={() => setInstance("dsadsa")}
                    className="register"
                >
                    Registrarse
                </span>
            ) : (
                <span onClick={() => setInstance("login")} className="register">
                    Iniciar sesion
                </span>
            )}
        </div>
    );
};

export default Login;
