import React from "react";

import Home from "./pages/home";
import Heavy from "./pages/heavy";

import { Route, Routes } from "react-router-dom";

function AppRouter() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heavy" element={<Heavy />} />
        </Routes>
    )
}

export default AppRouter;