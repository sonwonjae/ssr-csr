import React from "react";
import Navigator from "../components/Navigator";
import DrawBoard from "../components/DrawBoard";
import AsyncComponent from "../components/AsyncComponent";

function Home() {

    return (
        <main>
            <h2>Home</h2>
            <Navigator />
            {/* <DrawBoard /> */}
            <AsyncComponent />
        </main> 
    )
}

export default Home;