import { Provider } from "react-redux";
import "./App.css";
import generateStore from "../store";
import Main from "./main/main";
import { BrowserRouter as Router } from "react-router-dom";

const store = generateStore();

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Main />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
