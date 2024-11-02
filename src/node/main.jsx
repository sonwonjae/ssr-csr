import React from "react";
import { StaticRouter } from "react-router-dom/server";

import App from "../App";

export default function NodeApp({ url }) {

    return (
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    )
}
