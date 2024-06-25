import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import "./index.css";

ReactDOM.hydrateRoot(
    document.getElementById("root")!,
    <React.StrictMode>
        <BrowserRouter basename="/LaunchCode">
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
);