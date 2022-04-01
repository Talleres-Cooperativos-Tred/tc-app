import { Provider } from "react-redux";
import "./App.css";
import Login from "./components/login/login";
import Movies from "./components/movies/movies";
import generateStore from "./store";

function App() {
    const store = generateStore();
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
    return (
        <Provider store={store}>
            <Login />
        </Provider>
    );
}

export default App;
