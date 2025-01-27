import './styles/global.css';

import React from "react";
import AppRouter from "./AppRouter";

function App({ ...props }) {
    return (<AppRouter {...props} />)
}

export default App;