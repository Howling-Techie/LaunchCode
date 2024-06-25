import React from "react";
import ReactDOMServer from "react-dom/server";
import {StaticRouter} from "react-router-dom/server";
import App from "./App";

export function render(url: string | Partial<Location>) {

    return ReactDOMServer.renderToString(
        <React.StrictMode>
            <StaticRouter location={url} basename="/LaunchCode">
                <App/>
            </StaticRouter>
        </React.StrictMode>,
    );
}