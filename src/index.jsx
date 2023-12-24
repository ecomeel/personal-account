import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import store from "./store/store.js";
import App from "./App.jsx";

import "./index.scss";
import "./firebase.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
);
