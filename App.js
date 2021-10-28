// Librairies
import React from "react";
import { Provider } from "react-redux";

// Composants
import AppNav from "./routes/AppNav";

// Redux
import store from "./redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <AppNav />
        </Provider>
    );
}
