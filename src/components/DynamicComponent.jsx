import { lazy } from "@loadable/component";
import React, { Suspense, useEffect, useRef, useState } from "react";

const InfiniteLoadingComponent = ({fallback}) => {
    const isServer = !globalThis.window;

    if (!isServer) {
        throw new Promise((res) => {
            if (isServer) {
                res()
            }
        });
    }

    return fallback
};

function DynamicComponent({ loadableCallback, fallback }) {
    const [Component, setComponent] = useState(null)
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries, innerObserver) => {
            entries.forEach((entry) => {
                try {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    const LoadableCompoent = lazy(loadableCallback);
                    setComponent(LoadableCompoent)

                    innerObserver.unobserve(ref.current)
                } catch (error) {
                    console.error(error)
                }
            })
        });

        observer.observe(ref.current)

        return () => {
            observer.unobserve(ref.current)
        }
    }, [])

    if (Component) {
        return (
            <Suspense fallback={fallback}>
                <Component />
            </Suspense>
        )
    }

    return (
        <div ref={ref}>
            <Suspense fallback={fallback}>
                <InfiniteLoadingComponent fallback={fallback} />
            </Suspense>
        </div>
    )
}

export default DynamicComponent;