import { Provider } from "react-redux";
import "./App.css";
import Movies from "./components/movies/movies";
import generateStore from "./store";

function App() {
    const store = generateStore();
    return (
        <Provider store={store}>
            <Movies />
        </Provider>
    );
}

export default App;
