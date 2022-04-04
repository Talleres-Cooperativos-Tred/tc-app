import { useState } from "react";
import { Provider, useDispatch, useSelector, useStore } from "react-redux";
import "./App.css";
import generateStore from "../store";
import Main from "./main/main";
import Login from "./main/login/login";
import { Navigate, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({ userName: "", password: "" });
    const { logged, errorMessage, logginError } = useSelector(
        store => store.login
    );
    const handleLogin = e => {
        console.log(e);
        e.preventDefault();
        dispatch(handleLogin(user));
    };

    return (
        <Router>
            <div className="App">
                {true === false ? (
                    <Login
                        setUser={setUser}
                        user={user}
                        handleLogin={handleLogin}
                        loginError={logginError}
                        errorMessage={errorMessage}
                    />
                ) : (
                    <Main />
                )}
            </div>
        </Router>
    );
}

export default App;
