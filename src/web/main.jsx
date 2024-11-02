import "core-js";
import React from "react";
import { hydrateRoot } from "react-dom/client";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";

import App from "../App";

loadableReady(() => {
    const root = document.getElementById("root");
    hydrateRoot(
        root,
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
});
