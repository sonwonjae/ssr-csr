import React from "react";

// import Home from "./pages/home";
// import Heavy from "./pages/heavy";
const Home = loadable(() => import('./pages/home'))
const Heavy = loadable(() => import('./pages/heavy'))


import { Route, Routes } from "react-router-dom";

import loadable from '@loadable/component'


function AppRouter() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heavy" element={<Heavy />} />
        </Routes>
    )
}

export default AppRouter;