import React, { Suspense, useState } from "react";

const sleep = async (time = 3000) => {
    return await new Promise((res) => {
        setTimeout(() => {
            res();
        }, time);
    });
};

const closer = (() => {
    let state = false;

    return () => {
        const setState = (newState) => {
            return state = newState
        }
        
        return {
            state,
            setState,
        }
    }
})()

function AsyncInnerComponent(params) {
    const { state, setState } = closer()
    
    if (!state) {
        console.log('come here 1', state)
        throw new Promise((res) => {
            setTimeout(() => {
                console.log('come here 2', state)
                // setState(true)
                res();
            }, 500);
        });
    }
    console.log('come here 3')
    
    return '로딩 완료'
}

function AsyncComponent() {
    return (
        <Suspense fallback='로딩 중'>
            <AsyncInnerComponent />
        </Suspense>
    )
}

export default AsyncComponent