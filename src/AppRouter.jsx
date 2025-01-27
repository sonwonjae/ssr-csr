import React from "react";

import { Route, Routes } from "react-router-dom";

import loadable from '@loadable/component'

// import Home from "./pages/home";
// import Heavy from "./pages/heavy";
const Home = loadable(() => import('./pages/home'))
const Heavy = loadable(() => import('./pages/heavy'))


function AppRouter() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heavy" element={<Heavy />} />
        </Routes>
    )
}

export default AppRouter;