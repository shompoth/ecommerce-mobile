// Librairies
import React from "react";
import { Provider } from "react-redux";

// Composants
import UsersProducts from "./screens/UsersProducts";

// Redux
import store from "./redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <UsersProducts></UsersProducts>
        </Provider>
    );
}
