import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Login from "./components/login/login";
import Movies from "./components/movies/movies";
import generateStore from "./store";

const users = [
    {
        userName: "Tred",
        password: "tredinstructor12",
    },
    {
        userName: "adrianDev",
        password: "adrianDevpass12",
    },
    {
        userName: "lu15",
        password: "lupass15",
    },
];

const store = generateStore();

function App() {
    const [user, setUser] = useState({ userName: "", password: "" });
    const [loginSucceed, setLoginSucceed] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [instance, setInstance] = useState("login");

    const handleLogin = e => {
        e.preventDefault();
        if (instance === "login") {
            const success = users.find(element => {
                return (
                    element.userName === user.userName &&
                    element.password === user.password
                );
            });

            if (!success) {
                setLoginSucceed(false);
                setLoginError(true);
            } else {
                setLoginSucceed(true);
            }
        } else {
            users.push(user);
            setInstance("login");
        }
    };

    return (
        <Provider store={store}>
            {loginSucceed === false ? (
                <Login
                    setUser={setUser}
                    user={user}
                    handleLogin={handleLogin}
                    loginError={loginError}
                    setInstance={setInstance}
                    instance={instance}
                />
            ) : (
                <Movies />
            )}
        </Provider>
    );
}

export default App;
