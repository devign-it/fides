import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const LazyAnimation = () => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
    });
    const props = useSpring({ opacity: inView ? 1 : 0.5 });

    return (
        <animated.div ref={ref} style={props}>
            <span aria-label="Wave">👋</span>
        </animated.div>
    );
};

export default LazyAnimation;
