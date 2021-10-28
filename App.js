// Librairies
import React from "react";
import { Provider } from "react-redux";

// Composants
import Landing from "./screens/Landing";

// Redux
import store from "./redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <Landing />
        </Provider>
    );
}
