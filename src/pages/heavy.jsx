import React from "react";
import Navigator from "../components/Navigator";
// import HeavyDom from "../components/HeavyDom";
// import HeavyImage from "../components/HeavyImage";
import HeavyAsyncWithoutSkeleton from "../components/HeavyAsyncWithoutSkeleton";
import HeavyAsyncWithSkeleton from "../components/HeavyAsyncWithSkeleton";

function Heavy() {

    return (
        <main>
            <h1>Heavy</h1>
            <Navigator />
            {/* <HeavyAsyncWithoutSkeleton /> */}
            <HeavyAsyncWithSkeleton />
        </main> 
    )
}

export default Heavy;