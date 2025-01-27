import React from "react";
// import Navigator from "../components/Navigator";
import DynamicComponent from "../components/DynamicComponent";
// import loadable from "@loadable/component";
import HeavyDom from "../components/HeavyDom";

// const HeavyDom = loadable(() => import('../components/HeavyDom'))
// const HeavyDom = lazy(() => import('../components/HeavyDom'))

// import HeavyAsyncWithoutSkeleton from "../components/HeavyAsyncWithoutSkeleton";

import HeavyImage from "../components/HeavyImage";
import HeavyAsyncWithSkeleton from "../components/HeavyAsyncWithSkeleton";

function Heavy() {

    return (
        <main>
            <h2>Heavy</h2>
            {/* <Navigator /> */}
            <div style={{ height: '100vh', background: 'skyblue' }}>spacer</div>
            {/* <DynamicComponent
                loadableCallback={() => import('../components/HeavyDom')}
                fallback={<div>loading in heavydom</div>}
            />

            <DynamicComponent
                loadableCallback={() => import('../components/HeavyImage')}
                fallback={<div>loading image</div>}
            />

            <DynamicComponent
                loadableCallback={() => import('../components/HeavyAsyncWithSkeleton')}
                fallback={<div>loading data</div>}
            /> */}
            <HeavyDom />
            <HeavyImage />
            <HeavyAsyncWithSkeleton />

        </main> 
    )
}

export default Heavy;