import React from "react";
import { Link } from "react-router-dom";

function Navigator() {
    return (
        <nav>
            <Link to='/'>home page</Link>
            <Link to='/heavy'>heavy page</Link>
        </nav>
    )
}

export default Navigator